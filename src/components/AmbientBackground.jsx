import React, { useEffect, useRef, useState } from 'react';
import './AmbientBackground.css';

const AmbientBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '30%' });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw dot field
    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      
      const dotSpacing = 24;
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Draw once, or animate if needed
    drawDots();
    
    // Redraw on resize
    const resizeHandler = () => {
      resizeCanvas();
      drawDots();
    };
    
    window.addEventListener('resize', resizeHandler);

    const handleMouseMove = (e) => {
      setMousePos({
        x: `${(e.clientX / window.innerWidth) * 100}%`,
        y: `${(e.clientY / window.innerHeight) * 100}%`
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="ambient-wrapper">
      <div className="ambient-vignette"></div>
      <div className="ambient-container">
        <canvas ref={canvasRef} className="ambient-canvas"></canvas>
        <svg className="ambient-glow" aria-hidden="true" width="100%" height="100%">
          <defs>
            <radialGradient id="glow-gradient">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.25)"></stop>
              <stop offset="100%" stopColor="transparent"></stop>
            </radialGradient>
          </defs>
          <circle 
            cx={mousePos.x} 
            cy={mousePos.y} 
            r="40%" 
            fill="url(#glow-gradient)"
            style={{ transition: 'cx 0.1s ease-out, cy 0.1s ease-out' }}
          ></circle>
        </svg>
      </div>
      <div className="ambient-grain"></div>
      
      {/* Content */}
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default AmbientBackground;
