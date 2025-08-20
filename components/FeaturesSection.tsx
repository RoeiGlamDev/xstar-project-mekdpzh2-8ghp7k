import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">Why Choose Our Cosmetics?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3 className="feature-title">Luxury Ingredients</h3>
                        <p className="feature-description">Our products are crafted with the finest ingredients for a premium experience.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Elegant Packaging</h3>
                        <p className="feature-description">Each product is beautifully packaged to reflect our commitment to luxury.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Cruelty-Free</h3>
                        <p className="feature-description">We believe in beauty without harm, ensuring all products are cruelty-free.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Sustainable Practices</h3>
                        <p className="feature-description">Our commitment to sustainability ensures a better future for the planet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;