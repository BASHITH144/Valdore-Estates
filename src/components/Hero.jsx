import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in font-heading">
          Elegance Reimagined in Every Detail.
        </h1>
        <p className="hero-subtitle animate-fade-in delay-200">
          Discover a curated collection of ultra-luxury estates designed for the discerning few. Where organic minimalism meets architectural perfection.
        </p>
        <div className="hero-actions animate-fade-in delay-400">
          <button className="btn btn-primary">Explore Estates</button>
          <button className="btn btn-outline hero-btn-outline">Our Philosophy</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
