import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-dots" />
            <div className="container">
                <div className="about-inner">
                    <div className="about-image-wrap">
                        <div className="about-image-bg" />
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                            alt="Castaways Cafe interior"
                            className="about-image"
                        />
                    </div>
                    <div>
                        <h2 className="about-title">Point Pleasant's Favorite Spot</h2>
                        <p className="about-text">
                            Located at 1671 Beaver Dam Rd, Castaways Cafe & Grill offers a unique dining experience
                            in Point Pleasant. We are more than just a place to eat — we are a destination.
                        </p>
                        <p className="about-text">
                            Whether you're arriving by car or pulling up to our dock by boat, you'll be welcomed
                            with the warmest service and the best comfort food in town. Our "Skip the Diet"
                            philosophy ensures you leave satisfied every time.
                        </p>
                        <div className="about-stats">
                            <div className="about-stat">
                                <p className="about-stat-num">4.5★</p>
                                <p className="about-stat-label">Customer Rating</p>
                            </div>
                            <div className="about-stat">
                                <p className="about-stat-num">Boat</p>
                                <p className="about-stat-label">Accessible Dock</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
