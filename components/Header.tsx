import React from 'react';
import './Header.css'; // Assuming there's a CSS file for styles

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">FashionTV Cosmetics</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;