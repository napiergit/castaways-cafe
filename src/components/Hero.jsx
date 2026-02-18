import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')", // Scuba/Boat/Water vibe or nice cafe shot
                }}
            >
                <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/30 text-sm font-semibold mb-6 tracking-wider uppercase">
                        Point Pleasant's Hidden Gem
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display tracking-tight">
                        Castaways <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300">
                            Cafe & Grill
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
                        Where good food meets the open water. <br className="hidden md:inline" />
                        Boat accessible breakfast and lunch in Point Pleasant.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#menu"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gold text-navy font-bold rounded-lg shadow-lg hover:bg-amber-400 transition-colors flex items-center gap-2"
                        >
                            View Menu <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#visit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            Plan Your Visit
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Wave/Curve at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-32 fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
