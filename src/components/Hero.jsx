import React from 'react';
import { MapPin, CircleCheck, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="glass-badge">Open to work</span>
          </div>
          
          <div className="hero-tags">
            <span className="tag">Full Stack Developer</span>
            <span className="tag">MERN Stack Developer</span>
            <span className="tag location"><MapPin size={14} className="text-primary" /> Karachi, Pakistan</span>
          </div>
          
          <h1 className="hero-title">
            Ateeb Khan
          </h1>
          
          <p className="hero-subtitle">
            MERN Stack Developer with hands-on experience building scalable, secure, and high-performance web applications using React, Next.js, Redux, Node.js, Express, MongoDB, PHP, and REST APIs.
          </p>
          
          <div className="hero-skills">
            <div className="skill-item">
              <CircleCheck size={14} className="text-primary" /> MERN Stack training
            </div>
            <div className="skill-item">
              <CircleCheck size={14} className="text-primary" /> Secure APIs & auth
            </div>
            <div className="skill-item">
              <CircleCheck size={14} className="text-primary" /> Production UI
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              View projects <ArrowDownRight size={16} />
            </a>
            <a href="mailto:ateebkhan2299@gmail.com" className="btn btn-outline btn-lg glass-panel">
              Contact me <ArrowUpRight size={16} />
            </a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/ateebkhan2299" target="_blank" rel="noreferrer" className="btn-icon">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ateeb-khan-ak/" target="_blank" rel="noreferrer" className="btn-icon">
              <FaLinkedin size={18} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="btn-icon">
              <FaGlobe size={18} />
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card glass-panel">
              <span className="stat-value">08</span>
              <span className="stat-label">Selected projects</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-value">67</span>
              <span className="stat-label">Skills & tools</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-value">25</span>
              <span className="stat-label">Public repos</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="glass-panel image-card">
            <div className="image-container">
              <img src="/profile.jpg" alt="Ateeb Khan Profile" className="hero-img" />
              <div className="image-gradient"></div>
            </div>
            <div className="image-caption">
              <p className="caption-tag">Software engineer profile</p>
              <h2 className="caption-title">Secure MERN products with practical teaching experience.</h2>
              <p className="caption-desc">React, Next.js, Redux, Node.js, Express, MongoDB, PHP, JWT, cookies, OTP, REST APIs, and deployment-ready product UI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
