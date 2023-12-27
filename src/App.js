import React, { useEffect } from 'react';
import Header from './components/navigation/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'bran-portfolio';
  }, []);
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
