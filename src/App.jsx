import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Initialize Lenis smooth scroll and GSAP ScrollTrigger sync
  useSmoothScroll();

  return (
    <div className="app-wrapper">
      <div className="bg-gradients">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academic />
        <TechStack />
        <Services />
        <Projects />
        <Certificates />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
