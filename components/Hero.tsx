import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import anime from 'animejs';
import DevToolsBackground from './DevToolsBackground';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entry animation
    anime({
      targets: [titleRef.current, subRef.current, btnRef.current],
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 500 }),
      easing: 'easeOutExpo',
      duration: 1200
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-16 overflow-hidden" id="hero">
      {/* Background Animation */}
      <DevToolsBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium text-dev-green bg-dev-green/10 rounded-full border border-dev-green/20">
              Open to Work
            </div>
            
            <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white opacity-0">
              Frontend Developer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dev-blue to-dev-purple">
                & Code Whisperer
              </span>
            </h1>

            <p ref={subRef} className="text-lg sm:text-xl text-dev-muted max-w-2xl mx-auto lg:mx-0 opacity-0 leading-relaxed">
              I build pixel-perfect, engaging, and accessible digital experiences. 
              Former Google-level styling obsessed with clean code, smooth animations, and UI performance.
            </p>

            <div ref={btnRef} className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start opacity-0">
              <a 
                href="#projects"
                className="px-8 py-3.5 bg-dev-blue text-white font-medium rounded-lg shadow-lg shadow-dev-blue/20 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf"
                className="px-8 py-3.5 bg-dev-panel text-dev-text border border-dev-border font-medium rounded-lg hover:border-dev-muted hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3D / Visual Content */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-dev-blue/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 animate-fade-in-up delay-700">
              <ThreeScene />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-dev-muted">
        <span className="text-xs font-mono">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;