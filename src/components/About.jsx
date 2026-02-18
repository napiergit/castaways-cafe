import React from 'react';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-blob" />
            <div className="about-inner">
                <div>
                    <h2 className="about-title">About Castaways</h2>
                    <div className="about-divider" />
                    <p className="about-text">
                        Located in the heart of Point Pleasant, NJ, Castaways Cafe &amp; Grill is your go-to spot
                        for comfort food with a view. Whether you're arriving by car or by boat, our friendly staff
                        is ready to serve up hearty breakfasts and delicious lunches.
                    </p>
                    <p className="about-text">
                        We pride ourselves on our relaxed atmosphere, outdoor seating, and portions that leave you
                        satisfied. Come join us!
                    </p>
                    <div className="about-contacts">
                        <div className="about-contact-item">
                            <div className="about-contact-icon-wrap">📍</div>
                            <div>
                                <p className="about-contact-label">Visit Us</p>
                                <p className="about-contact-value">1671 Beaver Dam Rd, Point Pleasant, NJ</p>
                            </div>
                        </div>
                        <div className="about-contact-item">
                            <div className="about-contact-icon-wrap">📞</div>
                            <div>
                                <p className="about-contact-label">Call Us</p>
                                <p className="about-contact-value">+1 732-899-5580</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.688796472283!2d-74.0759880242691!3d40.08332197149591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1868310000001%3A0x6b1c67840134015!2s1671%20Beaver%20Dam%20Rd%2C%20Point%20Pleasant%2C%20NJ%2008742!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Castaways Cafe location"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
