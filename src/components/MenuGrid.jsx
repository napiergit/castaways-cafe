import React from 'react';

const menuItems = [
    {
        category: 'Breakfast Favorites',
        items: [
            { name: 'Classic Pancakes', desc: 'Fluffy stack of three, served with maple syrup and butter.', price: '$10' },
            { name: 'Castaways Omelette', desc: 'Three eggs with cheese, ham, peppers, and onions.', price: '$14' },
            { name: 'French Toast', desc: 'Thick-cut brioche dipped in our signature batter.', price: '$12' },
            { name: 'Breakfast Burrito', desc: 'Scrambled eggs, salsa, cheese, and chorizo wrapped in flour tortilla.', price: '$13' },
        ],
    },
    {
        category: 'Lunch Classics',
        items: [
            { name: 'The Dockside Burger', desc: 'Half-pound beef patty, cheddar, bacon, lettuce, tomato.', price: '$16' },
            { name: 'Crab Cake Sandwich', desc: 'Fresh lump crab cake with tartar sauce on a brioche bun.', price: '$18' },
            { name: 'Grilled Chicken Caesar', desc: 'Romaine hearts, parmesan, croutons, and grilled chicken breast.', price: '$15' },
            { name: 'Fish & Chips', desc: 'Beer-battered cod served with seasoned fries and slaw.', price: '$17' },
        ],
    },
];

const MenuGrid = () => {
    return (
        <section id="menu" className="menu">
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">Delicious Eats</p>
                    <h2 className="section-title">Menu Highlights</h2>
                    <div className="section-divider" />
                    <p className="section-desc">
                        From hearty breakfasts to satisfying lunches, everything is made fresh to order.
                    </p>
                </div>

                <div className="menu-grid">
                    {menuItems.map((section, idx) => (
                        <div key={idx} className="menu-card">
                            <h3 className="menu-category">{section.category}</h3>
                            <div className="menu-items">
                                {section.items.map((item, i) => (
                                    <div key={i} className="menu-item">
                                        <div className="menu-item-info">
                                            <h4 className="menu-item-name">{item.name}</h4>
                                            <p className="menu-item-desc">{item.desc}</p>
                                        </div>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="menu-note">Menu items and prices subject to change. Please call ahead for current specials.</p>
                <div className="menu-cta">
                    <a href="tel:+17328995580" className="btn-outline">Call to Ask About Today's Specials</a>
                </div>
            </div>
        </section>
    );
};

export default MenuGrid;
