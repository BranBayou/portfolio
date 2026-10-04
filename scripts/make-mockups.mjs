#!/usr/bin/env node
/**
 * Screenshot a website at desktop, laptop, tablet and phone sizes, then frame the
 * screenshots in device mockups (via scripts/frame-mockups.py).
 *
 * Usage:
 *   node scripts/make-mockups.mjs <url> <out-dir> [--preset card|upwork] [--wait 30000] [--settle 1500] [--keep-raw] [--bg 2C313A] [--chrome PATH]
 *
 * Example:
 *   node scripts/make-mockups.mjs https://branbayou.github.io/dev-jobs/ public/assets/projects/dev-jobs
 *
 * Writes all-devices, desktop, laptop, tablet and phone mockups to <out-dir>:
 *   --preset card    1200x732 WebP for the portfolio's project cards (default)
 *   --preset upwork  2000x1500 PNG (4:3) for Upwork portfolio items
 * --keep-raw also keeps the unframed PNGs in <out-dir>/raw/.
 *
 * Needs Node 22+ (built-in fetch and WebSocket), Chrome or Edge, and Python with Pillow.
 * Chrome is driven through the DevTools protocol, so single-page apps get time to render,
 * and phone/tablet sizes use real mobile emulation (viewport, pixel ratio, touch, user agent).
 */
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEVICES = [
  { name: 'desktop', width: 1920, height: 1080, scale: 1, mobile: false },
  { name: 'laptop', width: 1440, height: 900, scale: 1, mobile: false },
  {
    name: 'tablet', width: 834, height: 1112, scale: 2, mobile: true,
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  },
  {
    name: 'phone', width: 390, height: 844, scale: 3, mobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  },
];

const CHROME_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/microsoft-edge',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseArgs(argv) {
  const opts = { wait: 30000, settle: 1500, bg: '2C313A', preset: 'card', keepRaw: false, chrome: null, positional: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--wait') opts.wait = Number(argv[++i]);
    else if (a === '--settle') opts.settle = Number(argv[++i]);
    else if (a === '--bg') opts.bg = argv[++i];
    else if (a === '--preset') opts.preset = argv[++i];
    else if (a === '--chrome') opts.chrome = argv[++i];
    else if (a === '--keep-raw') opts.keepRaw = true;
    else opts.positional.push(a);
  }
  if (opts.positional.length !== 2) {
    console.error('Usage: node scripts/make-mockups.mjs <url> <out-dir> [--preset card|upwork] [--wait MS] [--settle MS] [--keep-raw] [--bg HEX] [--chrome PATH]');
    process.exit(1);
  }
  [opts.url, opts.outDir] = opts.positional;
  return opts;
}

function findChrome(explicit) {
  if (explicit) return explicit;
  const found = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!found) throw new Error("Couldn't find Chrome or Edge. Pass its path with --chrome.");
  return found;
}

/** Minimal DevTools protocol client over the built-in WebSocket. */
async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });
  let nextId = 0;
  const pending = new Map();
  const listeners = new Set();
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve: ok, reject: fail } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? fail(new Error(msg.error.message)) : ok(msg.result);
    } else if (msg.method) {
      for (const fn of listeners) fn(msg);
    }
  });
  return {
    send(method, params = {}) {
      return new Promise((ok, fail) => {
        const id = ++nextId;
        pending.set(id, { resolve: ok, reject: fail });
        ws.send(JSON.stringify({ id, method, params }));
      });
    },
    on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    close() { ws.close(); },
  };
}

async function launchChrome(chromePath, profileDir) {
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=0', // Chrome picks a free port and writes it to DevToolsActivePort
    `--user-data-dir=${profileDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'about:blank',
  ], { stdio: 'ignore' });

  const portFile = join(profileDir, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !existsSync(portFile); i++) await sleep(100);
  if (!existsSync(portFile)) throw new Error('Chrome did not start (no DevTools port).');
  const port = readFileSync(portFile, 'utf8').split('\n')[0].trim();

  let targets = [];
  for (let i = 0; i < 50; i++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      if (targets.some((t) => t.type === 'page')) break;
    } catch { /* not ready yet */ }
    await sleep(100);
  }
  const page = targets.find((t) => t.type === 'page');
  if (!page) throw new Error('Chrome started but no page target was found.');
  return { proc, cdp: await connect(page.webSocketDebuggerUrl) };
}

/** Navigate and wait until the page has visible content, the network is quiet and images are decoded. */
async function loadPage(cdp, url, { wait, settle }) {
  const inflight = new Set();
  let lastActivity = Date.now();
  const off = cdp.on(({ method, params }) => {
    if (method === 'Network.requestWillBeSent') { inflight.add(params.requestId); lastActivity = Date.now(); }
    if (method === 'Network.loadingFinished' || method === 'Network.loadingFailed') {
      inflight.delete(params.requestId); lastActivity = Date.now();
    }
  });

  await cdp.send('Page.navigate', { url });
  const deadline = Date.now() + wait;
  let ready = false;
  while (Date.now() < deadline) {
    await sleep(250);
    const { result } = await cdp.send('Runtime.evaluate', {
      expression: `document.readyState === 'complete' && document.body && document.body.innerText.trim().length > 0`,
      returnByValue: true,
    });
    // ignore long-lived connections (analytics, websockets): "quiet" means <= 2 open requests
    const quiet = inflight.size <= 2 && Date.now() - lastActivity > 800;
    if (result.value && quiet) { ready = true; break; }
  }
  off();

  // wait for images currently in the viewport to finish loading
  await cdp.send('Runtime.evaluate', {
    expression: `Promise.race([
      Promise.all([...document.images].filter(i => !i.complete).map(i => new Promise(r => { i.onload = i.onerror = r; }))),
      new Promise(r => setTimeout(r, 8000)),
    ])`,
    awaitPromise: true,
  });
  await sleep(settle); // let fades and carousels settle
  return ready;
}

async function capture(cdp, device, url, file, opts) {
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: device.width,
    height: device.height,
    deviceScaleFactor: device.scale,
    mobile: device.mobile,
  });
  await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: device.mobile, maxTouchPoints: device.mobile ? 5 : 1 });
  await cdp.send('Network.setUserAgentOverride', { userAgent: device.userAgent ?? desktopUserAgent });

  const ready = await loadPage(cdp, url, opts);
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(file, Buffer.from(data, 'base64'));
  console.log(`  screenshot  ${device.name.padEnd(8)} ${device.width * device.scale}x${device.height * device.scale}` +
    (ready ? '' : '  (page still loading after --wait; captured anyway)'));
}

let desktopUserAgent = '';

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const chromePath = findChrome(opts.chrome);
  const outDir = resolve(opts.outDir);
  mkdirSync(outDir, { recursive: true });
  // Keep screenshots inside the output folder (not the system temp folder): the Microsoft
  // Store build of Python can't always see files other programs write under AppData.
  const shotsDir = join(outDir, opts.keepRaw ? 'raw' : '.mockup-shots');
  mkdirSync(shotsDir, { recursive: true });
  const profileDir = mkdtempSync(join(tmpdir(), 'mockup-chrome-'));

  console.log(`Capturing ${opts.url}`);
  const { proc, cdp } = await launchChrome(chromePath, profileDir);
  try {
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Network.enable');
    // Present as regular Chrome, not "HeadlessChrome", for the desktop sizes.
    const { userAgent } = await cdp.send('Browser.getVersion');
    desktopUserAgent = userAgent.replace('HeadlessChrome', 'Chrome');

    for (const device of DEVICES) {
      await capture(cdp, device, opts.url, join(shotsDir, `${device.name}.png`), opts);
    }
  } finally {
    cdp.close();
    proc.kill();
    await sleep(500);
    rmSync(profileDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
  }

  const framer = join(dirname(fileURLToPath(import.meta.url)), 'frame-mockups.py');
  const args = [framer, shotsDir, outDir, '--bg', opts.bg, '--preset', opts.preset];
  let result = spawnSync('python', args, { stdio: 'inherit' });
  if (result.error) result = spawnSync('python3', args, { stdio: 'inherit' });
  if (!opts.keepRaw) rmSync(shotsDir, { recursive: true, force: true });
  if (result.error || result.status !== 0) {
    console.error('Framing failed. Is Python installed with Pillow (pip install pillow)?');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
