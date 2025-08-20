import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2); // semi-transparent background
  backdrop-filter: blur(10px); // glass effect
  border-radius: 15px; // rounded corners
  padding: 20px; // inner spacing
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // subtle shadow
  color: #fff; // text color
  border: 1px solid rgba(255, 255, 255, 0.5); // light border
`;

const Title = styled.h2`
  font-size: 24px; // title size
  margin: 0; // no margin
  color: #ff69b4; // pink color for title
`;

const Description = styled.p`
  font-size: 16px; // description size
  color: #fff; // white color for description
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;