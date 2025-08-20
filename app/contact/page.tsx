import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styles

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page" style={{ backgroundColor: '#fff', color: '#000' }}>
            <header className="contact-header" style={{ backgroundColor: '#f4c2c2', padding: '20px', textAlign: 'center' }}>
                <h1>Contact Us</h1>
                <p>For inquiries, please reach out to us.</p>
            </header>
            <main className="contact-form" style={{ padding: '20px' }}>
                <form>
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
                    <button type="submit" style={{ backgroundColor: '#f4c2c2', color: '#fff' }}>Send Message</button>
                </form>
            </main>
            <footer className="contact-footer" style={{ backgroundColor: '#f4c2c2', padding: '10px', textAlign: 'center' }}>
                <p>&copy; 2023 FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;