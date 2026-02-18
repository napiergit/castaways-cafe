import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                <p>&copy; {new Date().getFullYear()} Castaways Cafe &amp; Grill. All rights reserved.</p>
                <p>
                    <a
                        href="https://www.facebook.com/profile.php?id=100090064178342"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Follow us on Facebook
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
