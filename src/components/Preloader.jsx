import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 3.2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3200);

    // Completely remove preloader after 3.8 seconds
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <h1 className="preloader-title">
          <span className="text-primary">ATEEB</span> KHAN
        </h1>
        <p className="preloader-subtitle">FULL STACK DEVELOPER</p>
        
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
