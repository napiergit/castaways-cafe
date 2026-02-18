import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="visit" className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 font-display">Castaways <span className="text-gold">Cafe</span></h3>
                        <p className="mb-6 max-w-sm">
                            A charming waterside cafe in Point Pleasant, serving up hearty breakfast and lunch favorites. Come by boat or by car!
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=100090064178342" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-gold hover:text-navy transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gold hover:text-navy transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                                <span>1671 Beaver Dam Rd,<br />Point Pleasant, NJ 08742</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <a href="tel:+17328995580" className="hover:text-gold transition-colors">(732) 899-5580</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Opening Hours</h4>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Monday - Friday</span>
                                <span className="text-gray-400">7:00 AM - 3:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Saturday</span>
                                <span className="text-gray-400">7:00 AM - 3:00 PM</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span>Sunday</span>
                                <span className="text-gray-400">7:00 AM - 2:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950 py-6">
                <div className="container mx-auto px-4 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Castaways Cafe & Grill. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
