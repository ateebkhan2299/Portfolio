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
    <section id="skills" className="section tech-stack-section">
      <div className="container">
        <div className="tech-header">
          <span className="glass-badge">Capabilities</span>
          <h2 className="section-title">My <span className="text-primary">Tech Stack</span></h2>
        </div>
        
        <div className="tech-grid">
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
