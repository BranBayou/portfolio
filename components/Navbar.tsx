import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-dev-bg/80 backdrop-blur-md border-dev-border py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-dev-blue/10 p-2 rounded-lg group-hover:bg-dev-blue/20 transition-colors">
              <Terminal className="w-6 h-6 text-dev-blue" />
            </div>
            <span className="font-mono font-bold text-lg text-white tracking-tight">
              <span className="text-dev-blue">&lt;</span>
              Bran web apps
              <span className="text-dev-blue">/&gt;</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-dev-blue transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-dev-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 pr-4 border-r border-dev-border">
               <a href="https://github.com/BranBayou" className="text-dev-muted hover:text-white transition-colors">
                 <Github className="w-5 h-5" />
               </a>
               <a href="https://www.linkedin.com/in/bran-baye/" className="text-dev-muted hover:text-white transition-colors">
                 <Linkedin className="w-5 h-5" />
               </a>
            </div>
            <a 
              href="#contact"
              className="hidden md:block px-4 py-2 bg-dev-blue/10 text-dev-blue text-sm font-mono border border-dev-blue/30 rounded hover:bg-dev-blue hover:text-dev-bg transition-all duration-300"
            >
              Hire Me
            </a>
            
            <button 
              className="md:hidden text-dev-text hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dev-panel border-b border-dev-border transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-dev-border hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-dev-border flex gap-4">
             <a href="#" className="text-dev-muted hover:text-white">
                 <Github className="w-5 h-5" />
             </a>
             <a href="#" className="text-dev-muted hover:text-white">
                 <Linkedin className="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;