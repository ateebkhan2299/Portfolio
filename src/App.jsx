import React, { useState, useEffect } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  // Initialize global scroll animations
  useScrollReveal();

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <AmbientBackground>
        <Navbar />
        <main className="page-shell">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </AmbientBackground>
    </>
  );
}

export default App;
