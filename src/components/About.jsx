import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gold/20 rounded-2xl rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                alt="Cafe Interior or Vibe"
                                className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Point Pleasant's Favorite Spot</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Located at **1671 Beaver Dam Rd**, Castaways Cafe & Grill offers a unique dining experience in Point Pleasant. We are more than just a place to eat; we are a destination.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Whether you're arriving by car or pulling up to our dock by boat, you'll be welcomed with the warmest service and the best comfort food in town. Our "Skip the Diet" philosophy ensures you leave satisfied every time.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-gold pl-4">
                                <p className="font-bold text-2xl text-white">4.5+</p>
                                <p className="text-gray-400 text-sm">Star Rating</p>
                            </div>
                            <div className="border-l-4 border-gold pl-4">
                                <p className="font-bold text-2xl text-white">10+</p>
                                <p className="text-gray-400 text-sm">Years Serving</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
