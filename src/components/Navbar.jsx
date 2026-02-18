import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="#" className="navbar-brand">
                    <span className="navbar-brand-icon">⚓</span>
                    <span className="navbar-brand-name">Castaways</span>
                </a>

                <div className="navbar-links">
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#menu" className="navbar-link">Menu</a>
                    <a href="#about" className="navbar-link">About</a>
                    <a href="tel:+17328995580" className="navbar-cta">Call Us</a>
                </div>

                <button
                    className="navbar-mobile-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="navbar-mobile-menu-inner">
                    <a href="#" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#menu" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Menu</a>
                    <a href="#about" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>About</a>
                    <a href="tel:+17328995580" className="navbar-mobile-cta" onClick={() => setIsOpen(false)}>Call Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
