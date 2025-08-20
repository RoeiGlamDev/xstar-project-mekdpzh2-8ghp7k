import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#D5006D' }}>Luxury FashionTV Cosmetics</h1>
      <h2 style={{ color: '#D5006D' }}>Project Overview</h2>
      <p>
        This project aims to build a luxury cosmetics website inspired by FashionTV, featuring an elegant and high-end design.
      </p>
      <h2 style={{ color: '#D5006D' }}>Design Requirements</h2>
      <ul>
        <li>Color Palette: Pink and White</li>
        <li>Elegant Typography</li>
        <li>High-Quality Images</li>
        <li>Responsive Design</li>
      </ul>
      <h2 style={{ color: '#D5006D' }}>Technologies Used</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS Modules / Styled Components</li>
        <li>React Router</li>
      </ul>
      <h2 style={{ color: '#D5006D' }}>Getting Started</h2>
      <ol>
        <li>Clone the repository</li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Start the development server: <code>npm start</code></li>
      </ol>
      <h2 style={{ color: '#D5006D' }}>Contributing</h2>
      <p>
        Contributions are welcome! Please open an issue or submit a pull request.
      </p>
      <h2 style={{ color: '#D5006D' }}>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default README;