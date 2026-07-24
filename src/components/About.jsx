import React from 'react';
import { siteContent } from '../data/content';
import './About.css';

const About = () => {
  const { about } = siteContent;
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-column">
            <img 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80" 
              alt="Valdore Estates Architecture" 
              className="about-image"
            />
            <div className="about-experience-badge">
              <span className="years font-heading">{about.years}</span>
              <span className="years-text">{about.yearsTextLine1}<br/>{about.yearsTextLine2}</span>
            </div>
          </div>
          
          <div className="about-content-column">
            <h4 className="about-subtitle text-gold tracking-widest uppercase text-sm mb-4">{about.subtitle}</h4>
            <h2 className="about-title font-heading mb-6">{about.title}</h2>
            <div className="about-divider mb-8"></div>
            
            <p className="about-text mb-6">
              {about.paragraph1}
            </p>
            <p className="about-text mb-8">
              {about.paragraph2}
            </p>
            
            <a href={about.buttonHref} className="btn btn-primary">{about.buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
