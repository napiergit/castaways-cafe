import React from 'react';

const MenuItem = ({ title, description, image }) => (
    <div className="menu-card">
        <div className="menu-card-image-wrap">
            <div className="menu-card-image-overlay" />
            {image && (
                <img src={image} alt={title} className="menu-card-image" />
            )}
        </div>
        <div className="menu-card-body">
            <h3 className="menu-card-title">{title}</h3>
            <p className="menu-card-desc">{description}</p>
        </div>
    </div>
);

const MenuGrid = () => {
    const items = [
        {
            title: 'Breakfast Sandwich',
            description: 'Hearty breakfast sandwich on a roll, perfect for a morning start.',
            image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?q=80&w=2000&auto=format&fit=crop',
        },
        {
            title: 'Bacon Cheeseburger',
            description: 'Juicy burger topped with crispy bacon and melted cheese, served with fries.',
            image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=2000&auto=format&fit=crop',
        },
        {
            title: 'Classic Omelet',
            description: 'Fluffy omelet served with our signature home fries.',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=2000&auto=format&fit=crop',
        },
        {
            title: 'Breakfast Burrito',
            description: 'Loaded breakfast burrito to fuel your day on the water.',
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2000&auto=format&fit=crop',
        },
    ];

    return (
        <section id="menu" className="menu-section">
            <div className="menu-inner">
                <div className="menu-header">
                    <span className="menu-eyebrow">Our Menu</span>
                    <h2 className="menu-title">Customer Favorites</h2>
                    <p className="menu-subtitle">
                        Whatever you're craving, we've got something to hit the spot. "Skip the Diet" and dive in!
                    </p>
                </div>
                <div className="menu-grid">
                    {items.map((item, index) => (
                        <MenuItem key={index} {...item} />
                    ))}
                </div>
                <div className="menu-footer">
                    <a
                        href="https://www.facebook.com/profile.php?id=100090064178342&sk=menu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-blue"
                    >
                        See Full Menu on Facebook
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MenuGrid;
