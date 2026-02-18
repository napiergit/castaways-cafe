import React from 'react';
import { Anchor, Coffee, Sun, Ship } from 'lucide-react'; // Assuming valid icons
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Ship className="w-8 h-8 text-gold" />,
        title: "Boat Accessible",
        description: "Pull up right to our dock. We're one of the few spots in Point Pleasant where you can arrive by boat."
    },
    {
        icon: <Coffee className="w-8 h-8 text-gold" />,
        title: "All Day Breakfast",
        description: "Craving pancakes at noon? We've got you covered with our hearty, comfort-food breakfast menu."
    },
    {
        icon: <Sun className="w-8 h-8 text-gold" />,
        title: "Outdoor Dining",
        description: "Enjoy the fresh air and sunshine on our patio while you dine on your favorites."
    },
    {
        icon: <Anchor className="w-8 h-8 text-gold" />,
        title: "Local Favorite",
        description: "A beloved spot for locals and visitors alike, knowing for our friendly atmosphere and great food."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Castaways?</h2>
                    <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Experience the unique charm of our waterside location and comfort food classics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group"
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-navy/5 text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
