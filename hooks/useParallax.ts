import { useEffect, useState } from 'react';

const useParallax = (scrollRef: React.RefObject<HTMLElement>, speed: number) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = window.pageYOffset;
      setOffset(scrollTop * speed);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offset; // Returns the calculated offset for parallax effect
};

export default useParallax;