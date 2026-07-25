import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      title: "EventSphere",
      domain: "Expo / Event Management",
      type: "Full-Stack Web Application",
      description: "A comprehensive event management platform featuring real-time ticketing, attendee tracking, and analytics dashboards.",
      tech: ["MERN", "Socket.io", "Tailwind CSS"],
    },
    {
      title: "DecipLane AI",
      domain: "AI-powered application",
      type: "AI + Full-Stack Application",
      description: "An intelligent platform leveraging Generative AI to analyze and provide actionable insights from complex datasets.",
      tech: ["React", "Node.js", "Gemini AI", "MongoDB"],
    },
    {
      title: "LuxuryStay",
      domain: "Hotel Management",
      type: "Backend / Full-Stack Application",
      description: "A robust backend system for hotel management, handling bookings, dynamic pricing, and role-based access control.",
      tech: ["Node.js", "Express", "MongoDB", "Redis"],
    },
    {
      title: "E-Commerce Book App",
      domain: "E-Commerce",
      type: "Flutter Mobile Application",
      description: "A cross-platform mobile application for purchasing books with seamless animations and secure payment integration.",
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Smart Property Sale",
      domain: "Real Estate / Property",
      type: "Flutter + Node.js + MongoDB",
      description: "A real estate application connecting buyers and sellers with advanced filtering and real-time messaging.",
      tech: ["Flutter", "Node.js", "MongoDB"],
    },
    {
      title: "Maru Dry Fruits",
      domain: "E-Commerce",
      type: "Web Application",
      description: "A sleek e-commerce storefront with optimized performance, a custom cart system, and an intuitive checkout flow.",
      tech: ["React", "Express", "MongoDB"],
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="glass-badge">Projects</span>
          <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>
        </div>
        
        <div className="projects-grid">
          {projectsList.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div className="project-header">
                <Folder className="project-icon text-primary" size={36} />
                <div className="project-links">
                  <a href="#" className="project-link" aria-label="GitHub Repository"><FaGithub size={20} /></a>
                  <a href="#" className="project-link" aria-label="Live Demo"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta">
                <span className="project-domain">{project.domain}</span>
                <span className="project-type text-muted">{project.type}</span>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <ul className="project-tech-list">
                {project.tech.map((tech, tIdx) => (
                  <li key={tIdx} className="project-tech-item">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
