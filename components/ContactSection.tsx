import React from 'react';
import './ContactSection.css'; // Assuming you have a CSS file for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">We'd love to hear from you!</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;