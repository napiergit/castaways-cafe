import React from 'react';

const menuItems = [
    {
        category: "Breakfast Favorites",
        items: [
            { name: "Classic Pancakes", desc: "Fluffy stack of three, served with maple syrup and butter.", price: "$10" },
            { name: "Castaways Omelette", desc: "Three eggs with cheese, ham, peppers, and onions.", price: "$14" },
            { name: "French Toast", desc: "Thick-cut brioche dipped in our signature batter.", price: "$12" },
            { name: "Breakfast Burrito", desc: "Scrambled eggs, salsa, cheese, and chorizo wrapped in flour tortilla.", price: "$13" }
        ]
    },
    {
        category: "Lunch Classics",
        items: [
            { name: "The Dockside Burger", desc: "Half-pound beef patty, cheddar, bacon, lettuce, tomato.", price: "$16" },
            { name: "Crab Cake Sandwich", desc: "Fresh lump crab cake with tartar sauce on a brioche bun.", price: "$18" },
            { name: "Grilled Chicken Caesar", desc: "Romaine hearts, parmesan, croutons, and grilled chicken breast.", price: "$15" },
            { name: "Fish & Chips", desc: "Beer-battered cod served with seasoned fries and slaw.", price: "$17" }
        ]
    }
];

const MenuGrid = () => {
    return (
        <section id="menu" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-gold font-semibold tracking-wider uppercase text-sm">Delicious Eats</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mt-2 mb-6">Menu Highlights</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From hearty breakfasts to satisfying lunches, everything is made fresh to order.
                        <span className="italic block mt-2 text-sm text-gray-500">Note: Menu items and prices subject to change.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {menuItems.map((section, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-navy mb-8 border-b-2 border-gold/30 pb-4 inline-block">{section.category}</h3>
                            <div className="space-y-8">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-start group">
                                        <div className="flex-1 pr-8">
                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-gold transition-colors">{item.name}</h4>
                                            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                                        </div>
                                        <span className="font-bold text-navy">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-navy text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-colors">
                        View Full Menu (PDF)
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MenuGrid;
