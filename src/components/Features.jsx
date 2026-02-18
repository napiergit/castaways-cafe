import React from 'react';

const features = [
    {
        icon: '⛵',
        title: 'Boat Accessible',
        description: "Pull up right to our dock. We're one of the few spots in Point Pleasant where you can arrive by boat.",
    },
    {
        icon: '☕',
        title: 'All Day Breakfast',
        description: "Craving pancakes at noon? We've got you covered with our hearty, comfort-food breakfast menu.",
    },
    {
        icon: '☀️',
        title: 'Outdoor Dining',
        description: 'Enjoy the fresh air and sunshine on our patio while you dine on your favorites.',
    },
    {
        icon: '⚓',
        title: 'Local Favorite',
        description: 'A beloved spot for locals and visitors alike, known for our friendly atmosphere and great food.',
    },
];

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">Why Choose Us</p>
                    <h2 className="section-title">Why Castaways?</h2>
                    <div className="section-divider" />
                    <p className="section-desc">
                        Experience the unique charm of our waterside location and comfort food classics.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
