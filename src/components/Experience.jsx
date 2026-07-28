import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {

  const experiences = [
    {
      role: "Teaching Associate",
      company: "Aptech Learning",
      location: "Shahrah-e-Faisal",
      period: "Dec 2025 - Present",
      bullets: [
        "Deliver hands-on training in MERN Stack, Next.js, and Javascript development.",
        "Teach authentication systems including JWT, cookies, and OTP verification.",
        "Assist students in debugging, project structuring, best coding practices, and real-world full-stack workflows."
      ],
      tags: ["MERN Stack", "Next.js", "Javascript", "JWT", "OTP"]
    },
    {
      role: "Computer Teacher",
      company: "Boston Grammar School",
      location: "",
      period: "Aug 2025 - Dec 2025",
      bullets: [
        "Taught computer fundamentals and programming basics to Grades 3-10.",
        "Designed engaging lessons, improved student participation, and strengthened digital literacy and logical thinking."
      ],
      tags: ["Computing", "Programming", "Digital literacy"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="experience-header reveal-up">
          <span className="glass-badge">Journey</span>
          <h2 className="section-title">Experience & <span className="text-primary">Education</span></h2>
        </div>
        
        <div className="ref-timeline-container">
          <div className="ref-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`ref-timeline-item reveal-up delay-${(idx + 1) * 100}`}>
                <div className="ref-timeline-dot"></div>
                
                <div className="ref-timeline-content glass-panel">
                  <div className="ref-card-header">
                    <h3 className="ref-role-highlight">{exp.role}</h3>
                    <div className="ref-period-badge">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="ref-meta-row">
                    <div className="ref-meta-item">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                    {exp.location && (
                      <div className="ref-meta-item">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="ref-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="ref-bullet-item">
                        <span className="ref-bullet-dot"></span>
                        <span className="ref-bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="ref-tags">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="ref-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
