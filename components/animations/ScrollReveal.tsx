'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealAnimation: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 1000, // Animation duration
      delay: 200, // Delay before animation starts
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll back
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with 'reveal' class

    return () => {
      sr.destroy(); // Clean up on unmount
    };
  }, []);

  return <div className="reveal">{children}</div>; // Wrap children with 'reveal' class
};

export default ScrollRevealAnimation;