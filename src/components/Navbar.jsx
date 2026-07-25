import React, { useState, useEffect } from 'react';
import { Sun, Moon, Send, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="glass-nav nav-container">
        <a href="#home" className="nav-brand">
          <div className="avatar">
            <span className="avatar-fallback">AK</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Ateeb</span>
            <span className="brand-role">Full Stack Developer</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="btn-icon theme-toggle" aria-label="Toggle theme">
            <Moon className="icon-moon" size={16} />
            {/* <Sun className="icon-sun" size={16} /> */}
          </button>
          
          <a href="mailto:ateebkhan2299@gmail.com" className="btn btn-primary nav-connect">
            <Send size={16} />
            <span>Connect</span>
          </a>
          
          <button className="btn-icon mobile-menu" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
