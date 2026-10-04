#!/usr/bin/env python3
"""
Frame desktop/laptop/tablet/phone screenshots in simple device mockups.

Normally run for you by scripts/make-mockups.mjs, which takes the screenshots first.
To frame screenshots you already have, put desktop.png, laptop.png, tablet.png and
phone.png in one folder and run:

    python scripts/frame-mockups.py SHOTS_DIR OUT_DIR [--preset card|upwork] [--bg 2C313A]

Writes all-devices, desktop, laptop, tablet and phone mockups
(1200x732 WebP for the portfolio cards, or with --preset upwork 2000x1500 PNG for
Upwork portfolio items). Needs Pillow (pip install pillow).
"""

import argparse
import sys
from pathlib import Path

from PIL import Image, ImageDraw

# screen proportions of each device (css width, css height)
SCREENS = {
    "desktop": (16, 9),
    "laptop": (16, 10),
    "tablet": (834, 1112),
    "phone": (390, 844),
}

S = 2                           # supersample factor (set per preset in main)
W, H = 1200 * S, 732 * S        # canvas size (set per preset in main)
BEZEL = (0x14, 0x16, 0x1B)
EDGE = (0x4A, 0x50, 0x5C)
STAND = (0x3A, 0x3F, 0x49)
BASE = (0x50, 0x56, 0x62)


def fit(img, w, h):
    """Scale to the screen width, then crop from the top to the screen height."""
    scale = w / img.width
    resized = img.resize((w, max(h, round(img.height * scale))), Image.LANCZOS)
    return resized.crop((0, 0, w, h))


def paste_screen(canvas, shot, x, y, w, h, radius=0):
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius, fill=255)
    canvas.paste(fit(shot, w, h), (x, y), mask)


def bezel(d, x0, y0, x1, y1, radius):
    d.rounded_rectangle((x0, y0, x1, y1), radius, fill=BEZEL, outline=EDGE, width=S * 2)


def screen_height(name, sw):
    w, h = SCREENS[name]
    return round(sw * h / w)


def monitor(c, d, shots, x, y, sw):
    sh = screen_height("desktop", sw)
    b = round(sw * 0.022)
    bezel(d, x - b, y - b, x + sw + b, y + sh + b * 2.6, round(b * 1.2))
    paste_screen(c, shots["desktop"], x, y, sw, sh)
    cx, neck, top = x + sw // 2, round(sw * 0.09), y + sh + b * 2.6
    d.polygon([(cx - neck // 2, top), (cx + neck // 2, top),
               (cx + neck * 0.7, top + sw * 0.09), (cx - neck * 0.7, top + sw * 0.09)], fill=STAND)
    d.rounded_rectangle((cx - sw * 0.17, top + sw * 0.09, cx + sw * 0.17, top + sw * 0.105), S * 4, fill=BASE)


def laptop(c, d, shots, x, y, sw):
    sh = screen_height("laptop", sw)
    b = round(sw * 0.025)
    bezel(d, x - b, y - b, x + sw + b, y + sh + b, round(b * 1.3))
    paste_screen(c, shots["laptop"], x, y, sw, sh)
    by, ext = y + sh + b, round(sw * 0.09)
    d.polygon([(x - b - ext * 0.3, by), (x + sw + b + ext * 0.3, by),
               (x + sw + b + ext, by + sw * 0.035), (x - b - ext, by + sw * 0.035)], fill=BASE)
    d.rounded_rectangle((x + sw // 2 - sw * 0.08, by, x + sw // 2 + sw * 0.08, by + sw * 0.012), S * 3, fill=STAND)


def tablet(c, d, shots, x, y, sw):
    sh = screen_height("tablet", sw)
    b = round(sw * 0.05)
    bezel(d, x - b, y - b, x + sw + b, y + sh + b, round(b * 2.2))
    paste_screen(c, shots["tablet"], x, y, sw, sh, round(b * 0.8))


def phone(c, d, shots, x, y, sw):
    sh = screen_height("phone", sw)
    b = round(sw * 0.045)
    bezel(d, x - b, y - b, x + sw + b, y + sh + b, round(sw * 0.16))
    paste_screen(c, shots["phone"], x, y, sw, sh, round(sw * 0.12))
    # small camera island, kept high so it doesn't cover the site's header
    d.rounded_rectangle((x + sw * 0.41, y + sw * 0.012, x + sw * 0.59, y + sw * 0.05), S * 20, fill=BEZEL)


def layout(spec):
    """Build scene functions from {name: [(device, x, y, screen_width), ...]} in base pixels."""
    devices = {"monitor": monitor, "laptop": laptop, "tablet": tablet, "phone": phone}
    return {
        name: (lambda placements: lambda c, d, s: [
            devices[dev](c, d, s, round(x * S), round(y * S), round(sw * S)) for dev, x, y, sw in placements
        ])(placements)
        for name, placements in spec.items()
    }


# Each preset: base canvas size, output scale (output = base * scale), file format, and
# where each device sits. In "all-devices" later devices are drawn over earlier ones.
PRESETS = {
    # portfolio project cards: 1200x732 WebP
    "card": {
        "base": (1200, 732), "scale": 1, "format": "webp",
        "scenes": layout({
            "all-devices": [("monitor", 330, 70, 640), ("laptop", 70, 330, 430),
                            ("tablet", 820, 300, 190), ("phone", 1050, 380, 105)],
            "desktop": [("monitor", 220, 60, 760)],
            "laptop": [("laptop", 260, 90, 680)],
            "tablet": [("tablet", 445, 50, 310)],
            "phone": [("phone", 520, 50, 290)],
        }),
    },
    # Upwork portfolio: 4:3, recommended 1000x750 (min 400x300, max 4000x4000, JPG/PNG/GIF).
    # Exported at 2x (2000x1500 PNG) so UI text stays sharp when zoomed.
    "upwork": {
        "base": (1000, 750), "scale": 2, "format": "png",
        "scenes": layout({
            "all-devices": [("monitor", 250, 95, 560), ("laptop", 60, 370, 400),
                            ("tablet", 690, 335, 180), ("phone", 885, 415, 92)],
            "desktop": [("monitor", 90, 85, 820)],
            "laptop": [("laptop", 120, 130, 760)],
            "tablet": [("tablet", 290, 95, 420)],
            "phone": [("phone", 355, 60, 290)],
        }),
    },
}


def main():
    global S, W, H
    parser = argparse.ArgumentParser(description="Frame screenshots in device mockups.")
    parser.add_argument("shots_dir", help="folder with desktop.png, laptop.png, tablet.png, phone.png")
    parser.add_argument("out_dir", help="folder to write the mockups to")
    parser.add_argument("--bg", default="2C313A", help="canvas colour as hex (default 2C313A)")
    parser.add_argument("--preset", choices=PRESETS, default="card",
                        help="card = 1200x732 WebP for the portfolio (default); upwork = 2000x1500 PNG (4:3)")
    args = parser.parse_args()

    preset = PRESETS[args.preset]
    base_w, base_h = preset["base"]
    S = 2 * preset["scale"]                 # supersample 2x on top of the output scale
    W, H = base_w * S, base_h * S
    out_size = (base_w * preset["scale"], base_h * preset["scale"])

    shots = {}
    for name in SCREENS:
        path = Path(args.shots_dir) / f"{name}.png"
        if not path.is_file():
            sys.exit(f"Missing screenshot: {path}")
        shots[name] = Image.open(path).convert("RGB")

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    bg = tuple(int(args.bg.lstrip("#")[i:i + 2], 16) for i in (0, 2, 4))

    print(f"Building mockups ({args.preset}, {out_size[0]}x{out_size[1]})")
    for name, draw in preset["scenes"].items():
        canvas = Image.new("RGB", (W, H), bg)
        draw(canvas, ImageDraw.Draw(canvas), shots)
        image = canvas.resize(out_size, Image.LANCZOS)
        out = out_dir / f"{name}.{preset['format']}"
        if preset["format"] == "webp":
            image.save(out, "WEBP", quality=84, method=6)
        else:
            image.save(out, "PNG", optimize=True)
        print(f"  mockup      {out}")
    print("Done.")


if __name__ == "__main__":
    main()
