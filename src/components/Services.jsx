import React from 'react';
import { Layout, Server, Smartphone, BrainCircuit } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using React, Node.js, and modern databases for scalable business solutions.",
      icon: <Layout size={32} className="text-primary" />
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications built with Flutter, ensuring native-like performance on iOS and Android.",
      icon: <Smartphone size={32} className="text-primary" />
    },
    {
      title: "Backend Architecture",
      description: "Robust REST APIs and microservices with Node.js, Express, MongoDB, and Redis, optimized for speed and security.",
      icon: <Server size={32} className="text-primary" />
    },
    {
      title: "AI Integration",
      description: "Integrating Google Generative AI and Gemini into existing products to automate workflows and create smart user experiences.",
      icon: <BrainCircuit size={32} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-header">
          <span className="glass-badge">Services</span>
          <h2 className="section-title">My <span className="text-primary">Services</span></h2>
        </div>
        
        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card glass-panel">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
