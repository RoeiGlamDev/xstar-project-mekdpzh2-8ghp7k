import React from 'react';
import './StatsSection.css'; // Assuming you have a CSS file for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">100+</h2>
                <p className="stat-description">Luxury Products</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">50k+</h2>
                <p className="stat-description">Happy Customers</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">10+</h2>
                <p className="stat-description">Years of Experience</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">200+</h2>
                <p className="stat-description">Global Partners</p>
            </div>
        </section>
    );
};

export default StatsSection;