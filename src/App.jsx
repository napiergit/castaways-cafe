import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuGrid from './components/MenuGrid';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: '#1e293b' }}>
      <Navbar />
      <Hero />
      <Features />
      <MenuGrid />
      <About />
      <Footer />
    </div>
  );
}

export default App;
