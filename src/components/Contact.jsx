import React, { useState } from 'react';
import { Send, MapPin, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // TODO: Replace with your actual Web3Forms Access Key
  const ACCESS_KEY = "3b5b8d1c-b742-449e-b376-be795a630afa";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus('error');
      setErrorMessage("Please set your Web3Forms Access Key in Contact.jsx");
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="glass-badge">Contact</span>
          <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
        </div>
        
        <div className="contact-container">
          <div className="contact-info glass-panel">
            <h3 className="contact-heading">Let's talk about everything!</h3>
            <p className="contact-subheading">
              Don't like forms? Send me an email. 👋
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} className="text-primary" />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>ateebkhan2299@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Karachi, Pakistan (Remote)</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control" 
                placeholder="Your Name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control" 
                placeholder="Email Address" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control" 
                placeholder="Subject" 
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control" 
                rows="5" 
                placeholder="Message" 
                required
              ></textarea>
            </div>
            
            {status === 'error' && (
              <div className="form-status error" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <AlertCircle size={16} /> {errorMessage}
              </div>
            )}

            {status === 'success' && (
              <div className="form-status success" style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} /> Message sent successfully!
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary btn-submit"
              disabled={status === 'submitting'}
              style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
            >
              {status === 'submitting' ? (
                <>Sending... <Loader2 size={20} className="spinner" style={{ animation: 'spin 1s linear infinite' }} /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
