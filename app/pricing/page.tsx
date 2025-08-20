import React from 'react';
import { Container, Title, PriceCard, Button } from './styledComponents'; // Assuming styledComponents is a file with styled components

const PricingPage: React.FC = () => {
  return (
    <Container>
      <Title>Luxury FashionTV Cosmetics Pricing</Title>
      <PriceCard>
        <h2>Basic Package</h2>
        <p>Includes essential cosmetics for a radiant look.</p>
        <span>$49.99</span>
        <Button>Choose Plan</Button>
      </PriceCard>
      <PriceCard>
        <h2>Premium Package</h2>
        <p>All the essentials plus exclusive items.</p>
        <span>$99.99</span>
        <Button>Choose Plan</Button>
      </PriceCard>
      <PriceCard>
        <h2>Deluxe Package</h2>
        <p>Ultimate luxury with personalized items.</p>
        <span>$149.99</span>
        <Button>Choose Plan</Button>
      </PriceCard>
    </Container>
  );
};

export default PricingPage;