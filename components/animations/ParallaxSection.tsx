import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(255, 192, 203, 0.7), rgba(255, 255, 255, 0.7));
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/path/to/your/image.jpg'); // Replace with your image path
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const ParallaxSection: React.FC = () => {
  return (
    <ParallaxContainer>
      <BackgroundImage />
      <Content>
        <Title>Luxury FashionTV Cosmetics</Title>
        <Subtitle>Elevate Your Beauty</Subtitle>
      </Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;