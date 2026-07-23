import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-column">
            <img 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80" 
              alt="webapp Architecture" 
              className="about-image"
            />
            <div className="about-experience-badge">
              <span className="years font-heading">25</span>
              <span className="years-text">Years of<br/>Excellence</span>
            </div>
          </div>
          
          <div className="about-content-column">
            <h4 className="about-subtitle text-gold tracking-widest uppercase text-sm mb-4">Our Philosophy</h4>
            <h2 className="about-title font-heading mb-6">Redefining the Art of Luxury Living.</h2>
            <div className="about-divider mb-8"></div>
            
            <p className="about-text mb-6">
              Founded on the principles of organic minimalism, webapp is more than a real estate brokerage—it is an architectural curator for the world's most discerning individuals. We believe that true luxury lies in simplicity, quality materials, and harmony with nature.
            </p>
            <p className="about-text mb-8">
              Every property in our exclusive portfolio is meticulously vetted to ensure it meets our exacting standards. From breathtaking coastal retreats to sophisticated urban penthouses, we represent homes that are masterpieces of design and craftsmanship.
            </p>
            
            <a href="#contact" className="btn btn-primary">Speak With A Director</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
