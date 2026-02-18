import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Visit Us', href: '#visit' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-inner">
                    <a href="#" className="navbar-logo">
                        <div className="navbar-logo-icon">⚓</div>
                        <div className="navbar-logo-text">
                            <span className="navbar-logo-name">Castaways</span>
                            <span className="navbar-logo-sub">Cafe & Grill</span>
                        </div>
                    </a>

                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="navbar-link">
                                {link.name}
                            </a>
                        ))}
                        <a href="tel:+17328995580" className="navbar-cta">Call Now</a>
                    </div>

                    <button
                        className="navbar-mobile-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="navbar-mobile-link"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <a href="tel:+17328995580" className="navbar-mobile-phone">
                    📞 (732) 899-5580
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
