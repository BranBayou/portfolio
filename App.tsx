import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  // Smooth scrolling behavior fix for some browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-dev-text bg-dev-bg overflow-x-hidden selection:bg-dev-blue selection:text-dev-bg">
      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;