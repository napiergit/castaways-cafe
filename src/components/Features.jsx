import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-icon-wrap">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
    </div>
);

const Features = () => {
    return (
        <section className="features">
            <div className="features-inner">
                <div className="features-grid">
                    <FeatureCard
                        icon="⚓"
                        title="Boat Accessible"
                        description="Dock your boat and enjoy a delicious meal right on the water. The perfect pitstop for your day out."
                    />
                    <FeatureCard
                        icon="☕"
                        title="All Day Breakfast"
                        description="From our signature omelets to fluffy pancakes, enjoy your breakfast favorites anytime."
                    />
                    <FeatureCard
                        icon="☀️"
                        title="Outdoor Seating"
                        description="Soak up the sun and enjoy the fresh air on our spacious outdoor patio."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
