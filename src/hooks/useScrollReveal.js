import { useEffect } from 'react';

export const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Keep it revealed once scrolled into view
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Find all elements that need to be revealed
    const hiddenElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [options.threshold, options.rootMargin]);
};
