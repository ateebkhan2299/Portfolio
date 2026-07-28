import React from 'react';
import { Layers, Palette, Zap, CodeXml } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header reveal-up">
          <span className="glass-badge">About</span>
          <h2 className="section-title">
            Building products with <span className="text-primary">clarity.</span>
          </h2>
          <p className="section-subtitle">
            Clean UI, readable architecture, secure authentication, practical APIs, and smooth user experiences.
          </p>
        </div>

        <div className="about-grid reveal-up delay-200">
          <div className="about-main-card glass-panel">
            <span className="badge-secondary">About me</span>
            <h3 className="about-main-title">
              I'm Ateeb Khan, a MERN Stack developer working across React, Next.js, Redux, Node.js, Express, MongoDB, PHP, and REST APIs.
            </h3>
            <p className="about-main-desc">
              My CV focuses on scalable, secure, high-performance web applications, authentication systems, clean architecture, performance optimization, and real-world problem solving.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Layers size={20} />
              </div>
              <h4 className="feature-title">Feature Architecture</h4>
              <p className="feature-desc">Builds that stay organized as features grow.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Palette size={20} />
              </div>
              <h4 className="feature-title">Interface Clarity</h4>
              <p className="feature-desc">Clean interfaces that feel professional and easy to use.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Zap size={20} />
              </div>
              <h4 className="feature-title">Fast Feedback</h4>
              <p className="feature-desc">Fast loading and smooth interaction across the app.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <CodeXml size={20} />
              </div>
              <h4 className="feature-title">Teaching-Led Communication</h4>
              <p className="feature-desc">Clear explanations, teamwork, and practical thinking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
