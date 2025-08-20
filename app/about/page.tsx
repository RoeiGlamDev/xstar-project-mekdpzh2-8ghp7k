import React from 'react';
import styles from './AboutPage.module.css'; // Assuming you have a CSS module for styling

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About FashionTV Cosmetics</h1>
            <p className={styles.description}>
                Welcome to FashionTV Cosmetics, where luxury meets elegance. Our products are designed to enhance your natural beauty with premium ingredients and exquisite packaging.
            </p>
            <h2 className={styles.subTitle}>Our Mission</h2>
            <p className={styles.description}>
                At FashionTV Cosmetics, we believe in empowering individuals to express themselves through high-quality cosmetics that reflect sophistication and style.
            </p>
            <h2 className={styles.subTitle}>Our Products</h2>
            <p className={styles.description}>
                Explore our exclusive range of cosmetics, curated for those who appreciate the finer things in life. Each product is crafted with care and attention to detail.
            </p>
        </div>
    );
};

export default AboutPage;