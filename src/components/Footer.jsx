import React from 'react';

const Footer = () => {
    return (
        <footer id="visit" className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div>
                            <h3 className="footer-brand-name">
                                Castaways <span>Cafe</span>
                            </h3>
                            <p className="footer-brand-desc">
                                A charming waterside cafe in Point Pleasant, serving up hearty breakfast and lunch
                                favorites. Come by boat or by car!
                            </p>
                            <div className="footer-socials">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100090064178342"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social"
                                    aria-label="Facebook"
                                >
                                    f
                                </a>
                                <a href="#" className="footer-social" aria-label="Instagram">
                                    📷
                                </a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="footer-heading">Contact Us</h4>
                            <ul className="footer-contact-list">
                                <li className="footer-contact-item">
                                    <span className="footer-contact-icon">📍</span>
                                    <span>1671 Beaver Dam Rd,<br />Point Pleasant, NJ 08742</span>
                                </li>
                                <li className="footer-contact-item">
                                    <span className="footer-contact-icon">📞</span>
                                    <a href="tel:+17328995580" className="footer-contact-link">(732) 899-5580</a>
                                </li>
                                <li className="footer-contact-item">
                                    <span className="footer-contact-icon">✉️</span>
                                    <a href="mailto:Castawayscafeandgrill@gmail.com" className="footer-contact-link">
                                        Castawayscafeandgrill@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Hours */}
                        <div>
                            <h4 className="footer-heading">Opening Hours</h4>
                            <ul className="footer-hours-list">
                                <li className="footer-hours-item">
                                    <span>Monday – Friday</span>
                                    <span className="footer-hours-time">7:00 AM – 3:00 PM</span>
                                </li>
                                <li className="footer-hours-item">
                                    <span>Saturday</span>
                                    <span className="footer-hours-time">7:00 AM – 3:00 PM</span>
                                </li>
                                <li className="footer-hours-item">
                                    <span>Sunday</span>
                                    <span className="footer-hours-time">7:00 AM – 2:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© {new Date().getFullYear()} Castaways Cafe & Grill. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
