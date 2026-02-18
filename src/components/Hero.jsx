import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-overlay" />
            <div className="hero-content">
                <div className="hero-badge">Welcome to Point Pleasant</div>
                <h1 className="hero-title">
                    Castaways <br />
                    <span className="hero-title-sub">Cafe &amp; Grill</span>
                </h1>
                <p className="hero-subtitle">
                    Boat Accessible Breakfast &amp; Lunch on the Water
                </p>
                <div className="hero-buttons">
                    <a href="#menu" className="btn-hero-primary">View Menu</a>
                    <a href="#about" className="btn-hero-secondary">Find Us</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
