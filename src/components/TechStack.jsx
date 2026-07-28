import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      title: "Web Stack",
      skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "Next.js", "Redux Toolkit"]
    },
    {
      title: "Mobile Stack",
      skills: ["Flutter", "Dart", "Firebase", "REST API Integration"]
    },
    {
      title: "Backend & Services",
      skills: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "JWT", "Nodemailer", "Twilio", "Node Cron"]
    },
    {
      title: "AI Technologies",
      skills: ["Google Generative AI", "Gemini AI", "AI-powered backend", "AI analysis", "Background AI workers"]
    }
  ];

  return (
    <section id="skills" className="section tech-section">
      <div className="container">
        <div className="tech-header reveal-up">
          <span className="glass-badge">Skills</span>
          <h2 className="section-title">Technical <span className="text-primary">Arsenal</span></h2>
        </div>
        
        <div className="tech-grid reveal-up delay-200">
          {categories.map((category, idx) => (
            <div key={idx} className="tech-category glass-panel">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-container">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
