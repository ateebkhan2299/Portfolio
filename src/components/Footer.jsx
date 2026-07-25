import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="avatar-fallback" style={{background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold'}}>AK</span>
            <h3>Ateeb Khan</h3>
          </div>
          <p className="footer-tagline">Full-Stack Developer specializing in MERN & Next.js</p>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/ateebkhan2299" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ateeb-khan-ak/" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <FaLinkedin size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <FaGlobe size={18} />
          </a>
          <a href="mailto:ateebkhan2299@gmail.com" className="btn-icon">
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Ateeb Khan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
