import Header from './components/navigation/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Skills/>
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
