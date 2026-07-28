import React from 'react';
import { Calendar, Briefcase, MapPin, GraduationCap } from 'lucide-react';
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
      role: "Flutter Developer",
      company: "E-Commerce Mobile Application",
      location: "",
      period: "2026",
      bullets: [
        "Developed a modern E-Commerce mobile application using Flutter with secure authentication and backend integration for seamless online shopping experience.",
        "Key Features: User Authentication (Login/Signup), Checkout System, Product Listing & Detailed View, Responsive UI Design, Cart & Wishlist Functionality, Admin Management System."
      ],
      tags: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"]
    },
    {
      role: "Flutter Developer",
      company: "Discipline Life App",
      location: "",
      period: "2026",
      bullets: [
        "Built a productivity and self-improvement mobile application focused on helping users manage daily routines, habits, and goals.",
        "Key Features: Daily Routine Management, Habit Tracking, Goal Tracking, Clean & Intuitive UI."
      ],
      tags: ["Flutter", "Dart", "Firebase"]
    }
  ];

  const education = [
    {
      degree: "3-Year Diploma in Software Development",
      institution: "Aptech SFC",
      period: "2023 - 2026 (Currently in Last Semester)",
      bullets: ["Focus on software development, full-stack technologies, and practical applications."]
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Jamia Millia Government College",
      period: "Completed in 2025",
      bullets: []
    },
    {
      degree: "Matriculation (Science)",
      institution: "The Spirite School",
      period: "Completed in 2023",
      bullets: []
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="experience-header reveal-up">
          <span className="glass-badge">Journey</span>
          <h2 className="section-title">Professional <span className="text-primary">Experience</span></h2>
        </div>
        
        <div className="ref-timeline-container" style={{ marginBottom: '6rem' }}>
          <div className="ref-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`ref-timeline-item reveal-up delay-${(idx % 3 + 1) * 100}`}>
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
                  
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="ref-tags">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="ref-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="experience-header reveal-up">
          <span className="glass-badge">Academics</span>
          <h2 className="section-title">My <span className="text-primary">Education</span></h2>
        </div>

        <div className="ref-timeline-container">
          <div className="ref-timeline" style={{ borderLeftColor: 'rgba(147, 51, 234, 0.2)' }}>
            {education.map((edu, idx) => (
              <div key={idx} className={`ref-timeline-item reveal-up delay-${(idx % 3 + 1) * 100}`}>
                <div className="ref-timeline-dot" style={{ backgroundColor: '#9333ea', boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)' }}></div>
                
                <div className="ref-timeline-content glass-panel">
                  <div className="ref-card-header">
                    <h3 className="ref-role-highlight" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: '#fff' }}>{edu.degree}</h3>
                    <div className="ref-period-badge" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="ref-meta-row">
                    <div className="ref-meta-item">
                      <GraduationCap size={14} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  
                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className="ref-bullets">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="ref-bullet-item">
                          <span className="ref-bullet-dot" style={{ backgroundColor: '#9333ea' }}></span>
                          <span className="ref-bullet-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
