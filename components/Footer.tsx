import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dev-bg border-t border-dev-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <div className="font-bold text-white text-xl mb-1">Berhanu</div>
          <p className="text-dev-muted text-sm">Built with React, Tailwind & Three.js</p>
        </div>

        <div className="flex items-center gap-6">
           <a href="#" className="text-dev-muted hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
           <a href="#" className="text-dev-muted hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
           <a href="#" className="text-dev-muted hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
        
        <div className="text-dev-muted text-sm flex items-center gap-1">
          © {new Date().getFullYear()} Made with <Heart className="w-3 h-3 text-dev-red fill-current" /> by Berhanu
        </div>

      </div>
    </footer>
  );
};

export default Footer;