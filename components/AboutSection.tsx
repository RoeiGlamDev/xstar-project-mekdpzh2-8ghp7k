import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">About FashionTV Cosmetics</h1>
                <p className="about-description">
                    Discover the essence of luxury with FashionTV Cosmetics. Our products are designed to enhance your natural beauty, 
                    embodying elegance and sophistication in every shade.
                </p>
                <p className="about-description">
                    Crafted with the finest ingredients, our cosmetics offer a flawless finish that lasts all day. 
                    Experience the glamour and allure of FashionTV, where beauty meets luxury.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;