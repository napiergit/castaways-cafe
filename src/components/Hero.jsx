import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-bg">
                <div className="hero-overlay" />
            </div>

            <div className="hero-content animate-fade-in-up">
                <span className="hero-badge">Point Pleasant's Hidden Gem</span>
                <h1 className="hero-title">
                    Castaways <br />
                    <span className="hero-title-accent">Cafe & Grill</span>
                </h1>
                <p className="hero-subtitle">
                    Where good food meets the open water.<br />
                    Boat accessible breakfast and lunch in Point Pleasant.
                </p>
                <div className="hero-buttons">
                    <a href="#menu" className="btn-primary">
                        View Menu →
                    </a>
                    <a href="#visit" className="btn-secondary">
                        Plan Your Visit
                    </a>
                </div>
            </div>

            <div className="hero-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ fill: '#f8fafc', height: '80px', width: '100%' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
