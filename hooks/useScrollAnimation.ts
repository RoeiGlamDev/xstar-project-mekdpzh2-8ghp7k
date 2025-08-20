import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const windowHeight = window.innerHeight; // Get window height
    const triggerPoint = windowHeight / 1.5; // Set trigger point for animation

    if (scrollPosition > triggerPoint) {
      setIsVisible(true); // Set visibility to true if scrolled past trigger point
    } else {
      setIsVisible(false); // Reset visibility if above trigger point
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up listener on unmount
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;