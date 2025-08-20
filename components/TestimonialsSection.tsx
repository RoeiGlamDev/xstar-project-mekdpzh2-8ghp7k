import React from 'react';
import './TestimonialsSection.css'; // Assuming a CSS file for styling

const testimonials = [
  {
    name: 'Sophia Loren',
    quote: 'This is the best cosmetics line I have ever used!',
    image: '/images/sophia.jpg', // Sample image path
  },
  {
    name: 'Gigi Hadid',
    quote: 'Luxury and quality in every product!',
    image: '/images/gigi.jpg', // Sample image path
  },
  {
    name: 'Zendaya',
    quote: 'I feel glamorous every time I use these products!',
    image: '/images/zendaya.jpg', // Sample image path
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;