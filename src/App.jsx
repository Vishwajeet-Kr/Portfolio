import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CSFundamentals from './components/CSFundamentals';
import Experience from './components/Experience';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CSFundamentals />
          <Experience />
          <Terminal />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
