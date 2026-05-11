import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';

// Mock data representing the DOM structure of the portfolio itself
const mockDomLines = [
  { id: 1, indent: 0, content: '<!DOCTYPE html>' },
  { id: 2, indent: 0, content: '<html lang="en">' },
  { id: 3, indent: 1, content: '<body>' },
  { id: 4, indent: 2, content: '<div id="root">' },
  { id: 5, indent: 3, content: '<header class="fixed w-full z-50">' },
  { id: 6, indent: 4, content: '<nav class="flex justify-between">' },
  { id: 7, indent: 5, content: '<div class="logo">Berhanu</div>', flash: true },
  { id: 8, indent: 4, content: '</nav>' },
  { id: 9, indent: 3, content: '</header>' },
  { id: 10, indent: 3, content: '<main class="hero-section relative">' },
  { id: 11, indent: 4, content: '<h1 class="text-6xl font-bold">', flash: true },
  { id: 12, indent: 5, content: 'Frontend Developer' },
  { id: 13, indent: 4, content: '</h1>' },
  { id: 14, indent: 4, content: '<div class="canvas-container-3d">', flash: true },
  { id: 15, indent: 5, content: '<canvas width="1920" height="1080" />' },
  { id: 16, indent: 4, content: '</div>' },
  { id: 17, indent: 3, content: '</main>' },
  { id: 18, indent: 2, content: '</div>' },
  { id: 19, indent: 1, content: '<script src="bundle.js"></script>' },
  { id: 20, indent: 0, content: '</body>' },
  { id: 21, indent: 0, content: '</html>' },
];

const DevToolsBackground: React.FC = () => {
  const [activeLines, setActiveLines] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Effect to simulate "DOM Updates" flashing
  useEffect(() => {
    const flashInterval = setInterval(() => {
      // Pick random lines to flash
      const linesToFlash = mockDomLines
        .filter(l => l.flash)
        .filter(() => Math.random() > 0.7)
        .map(l => l.id);
      
      setActiveLines(linesToFlash);

      // Clear flash after short delay
      setTimeout(() => setActiveLines([]), 800);

    }, 2000);

    return () => clearInterval(flashInterval);
  }, []);

  // Initial fade in animation
  useEffect(() => {
    if (containerRef.current) {
      anime({
        targets: containerRef.current.querySelectorAll('.code-line'),
        opacity: [0, 0.5], // Keep it subtle
        translateX: [-20, 0],
        delay: anime.stagger(50),
        easing: 'easeOutQuad'
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex text-xs md:text-sm font-mono opacity-20 z-0">
      {/* Left Panel: Elements / DOM */}
      <div ref={containerRef} className="w-full md:w-2/3 p-8 pt-32 flex flex-col gap-1 text-dev-text/60">
        {mockDomLines.map((line) => (
          <div 
            key={line.id}
            className={`code-line transition-colors duration-300 rounded px-2 ${
              activeLines.includes(line.id) ? 'bg-dev-purple/30' : ''
            }`}
            style={{ marginLeft: `${line.indent * 1.5}rem` }}
          >
            <span className="text-dev-muted">{line.id}</span>
            <span className="ml-4" dangerouslySetInnerHTML={{ 
              __html: line.content
                .replace(/</g, '&lt;<span class="text-dev-blue">')
                .replace(/>/g, '</span>&gt;')
                .replace(/class=/g, '<span class="text-dev-orange">class</span>=')
                .replace(/"([^"]*)"/g, '<span class="text-dev-green">"$1"</span>')
            }} />
          </div>
        ))}
      </div>

      {/* Right Panel: Simulated CSS/Console (Hidden on mobile) */}
      <div className="hidden md:block w-1/3 border-l border-dev-border p-4 pt-32 bg-dev-panel/30 backdrop-blur-sm">
         <div className="mb-4 pb-2 border-b border-dev-border font-bold text-dev-muted text-xs uppercase">Styles</div>
         <div className="space-y-4 font-mono text-xs">
            <div className="animate-pulse">
              <span className="text-dev-orange">element.style</span> {'{'}
              <div className="pl-4 text-dev-blue">
                opacity: <span className="text-dev-purple">1</span>;
              </div>
              <div className="pl-4 text-dev-blue">
                display: <span className="text-dev-purple">block</span>;
              </div>
              {'}'}
            </div>
            
            <div>
              <span className="text-dev-orange">.hero-section</span> {'{'}
              <div className="pl-4 text-dev-blue">
                position: <span className="text-dev-purple">relative</span>;
              </div>
              <div className="pl-4 text-dev-blue">
                background: <span className="text-dev-green">#0d1117</span>;
              </div>
              {'}'}
            </div>

            <div className="mt-8 pt-2 border-t border-dev-border">
                 <div className="mb-2 font-bold text-dev-muted text-xs uppercase">Console</div>
                 <div className="text-dev-green">&gt; App initialized...</div>
                 <div className="text-dev-blue">&gt; Three.js scene mounted</div>
                 <div className="text-dev-text/50">&gt; Hiring status: <span className="text-dev-green">true</span></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DevToolsBackground;