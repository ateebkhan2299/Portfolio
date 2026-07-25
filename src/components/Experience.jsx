import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Freelance / Self-Employed",
      period: "2022 - Present",
      description: "Developed and deployed multiple full-stack applications including EventSphere and LuxuryStay. Architected scalable backends with Node.js and MongoDB, and built responsive frontends with React and Flutter.",
      tags: ["MERN", "Flutter", "System Design"]
    },
    {
      title: "AI Integration Specialist",
      company: "Various Projects",
      period: "2023 - Present",
      description: "Integrated Google Generative AI and Gemini AI into web and mobile applications to create smart, AI-powered features such as automated data analysis and background workers.",
      tags: ["Generative AI", "Gemini", "Node.js"]
    },
  ];

  const education = [
    {
      degree: "Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Focus on software engineering, data structures, algorithms, and artificial intelligence."
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="experience-header">
          <span className="glass-badge">Journey</span>
          <h2 className="section-title">Experience & <span className="text-primary">Education</span></h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-column">
            <h3 className="column-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-panel">
                    <span className="timeline-period">{exp.period}</span>
                    <h4 className="timeline-role">{exp.role || exp.title}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <p className="timeline-description">{exp.description}</p>
                    <div className="timeline-tags">
                      {exp.tags && exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="timeline-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="timeline-column">
            <h3 className="column-title">Education</h3>
            <div className="timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-panel">
                    <span className="timeline-period">{edu.period}</span>
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <span className="timeline-company">{edu.institution}</span>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
