import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, MapPin, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Visit Us', href: '#visit' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="bg-gold/10 p-2 rounded-full border border-gold/30 group-hover:bg-gold/20 transition-colors">
                            <Anchor className="text-gold w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold font-display leading-none ${scrolled ? 'text-white' : 'text-white'}`}>
                                Castaways
                            </span>
                            <span className="text-[10px] tracking-widest uppercase text-gold">Cafe & Grill</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-200 hover:text-gold transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="tel:+17328995580"
                            className="px-5 py-2 bg-gold text-navy font-bold rounded-lg hover:bg-white hover:text-navy transition-colors text-sm"
                        >
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-white hover:text-gold"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:+17328995580"
                                className="flex items-center gap-2 text-gold font-bold mt-4"
                            >
                                <Phone className="w-5 h-5" /> (732) 899-5580
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
