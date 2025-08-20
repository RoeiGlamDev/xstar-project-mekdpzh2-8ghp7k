import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background: linear-gradient(to bottom, #f8e1e1, #ffffff); // Pink to white gradient
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 150px; // Width of floating element
  height: 150px; // Height of floating element
  background-color: #ffcccb; // Light pink color
  border-radius: 50%; // Circular shape
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Soft shadow
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0); // Start and end at original position
    }
    50% {
      transform: translatey(-20px); // Float upwards
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement />
      <FloatingElement style={{ left: '20%', animationDelay: '1s' }} />
      <FloatingElement style={{ right: '20%', animationDelay: '2s' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;