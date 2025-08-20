import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Luxury Awaits</h1>
        <p className="hero-subtitle">Indulge in the finest cosmetics</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;