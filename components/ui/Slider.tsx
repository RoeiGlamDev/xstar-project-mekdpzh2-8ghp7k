import React from 'react';
import './Slider.css'; // Importing CSS for styling

const Slider: React.FC = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide">
                    <img src="/images/slide1.jpg" alt="Luxury Product 1" />
                </div>
                <div className="slide">
                    <img src="/images/slide2.jpg" alt="Luxury Product 2" />
                </div>
                <div className="slide">
                    <img src="/images/slide3.jpg" alt="Luxury Product 3" />
                </div>
            </div>
            <button className="prev" onClick={() => {/* Logic to go to previous slide */}}>❮</button>
            <button className="next" onClick={() => {/* Logic to go to next slide */}}>❯</button>
        </div>
    );
};

export default Slider;