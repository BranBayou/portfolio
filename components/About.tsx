import React from 'react';
import { Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dev-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image / Avatar */}
          <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
            <ScrollReveal className="relative w-64 h-80 group">
              {/* Glowing Background (Rotated) */}
              <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-tr from-dev-blue to-dev-purple rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-60 blur-lg"></div>
              
              {/* Card Base (Solid) */}
              <div className="absolute bottom-0 left-0 w-full h-[85%] rounded-2xl border-2 border-dev-border bg-dev-panel overflow-visible z-0 shadow-xl">
                 {/* Inner Grid/Decoration */}
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#58a6ff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
              </div>

              {/* Cutout Image (Popping out) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-auto z-10 flex items-end justify-center transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                 <img 
                   src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png" 
                   alt="Profile" 
                   className="w-full h-auto object-contain drop-shadow-2xl filter contrast-125" 
                 />
              </div>
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-dev-blue w-5 h-5" />
                <h2 className="text-sm font-mono text-dev-blue font-bold tracking-wider uppercase">About Me</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A developer who thinks like a designer.
              </h3>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="space-y-4 text-dev-muted leading-relaxed text-lg">
                <p>
                  I'm a Senior Frontend Engineer with a passion for building beautiful, functional, and accessible web applications. 
                  I don't just write code; I solve problems and create experiences.
                </p>
                <p>
                  With over 6 years of experience in the React ecosystem, I've honed my skills in bridging the gap between engineering and design. 
                  I thrive in environments where attention to detail is paramount and "good enough" is never the goal.
                </p>
                <p>
                  When I'm not debugging race conditions or optimizing render cycles, you can find me experimenting with WebGL, 
                  contributing to open-source, or optimizing my VIM config.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm text-dev-text">
                  <span className="px-3 py-1 bg-dev-panel border border-dev-border rounded">📍 San Francisco, CA</span>
                  <span className="px-3 py-1 bg-dev-panel border border-dev-border rounded">🚀 Open to Relocation</span>
                  <span className="px-3 py-1 bg-dev-panel border border-dev-border rounded">🗣️ English, Spanish</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;