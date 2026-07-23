import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveHeroBanner from './components/ResponsiveHeroBanner';
import Properties from './components/Properties';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import PropertyDetailPage from './components/PropertyDetailPage';
import PropertyMarquee from './components/PropertyMarquee';
import ValdoreImpact from './components/ValdoreImpact';
import { propertiesData } from './properties';
import './App.css';

// Import local assets
import logoImage from './assets/Valdore Estates Logo 2.png';
import heroImage from './assets/hero_background.png';
import backgroundVideo0 from './assets/background Vedio.mp4';
import backgroundVideo1 from './assets/background Vedio 1.mp4';
import backgroundVideo2 from './assets/background Vedio 2.mp4';
import backgroundVideo3 from './assets/background Vedio 3.mp4';

function App() {
  // Global theme state
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme class to document body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Extract all property images for the marquee loop
  const allPropertyImages = propertiesData.map(p => p.mainImage);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <ResponsiveHeroBanner 
                logoUrl={logoImage}
                backgroundImageUrl={heroImage}
                backgroundVideoUrls={[
                    backgroundVideo0,
                    backgroundVideo1,
                    backgroundVideo2,
                    backgroundVideo3
                ]}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
              <main className="main-content">
                <PropertyMarquee 
                  tagline="The Valdore Collection"
                  title={<>A Curated Portfolio <br/>of Masterpieces</>}
                  description="Explore our exclusive off-market and publicly listed properties, showcasing the pinnacle of architectural achievement."
                  ctaText="Explore Collection"
                  images={allPropertyImages}
                />
                <Properties />
                <ValdoreImpact />
                <About />
                <Services />
                <Contact />
              </main>
            </>
          } />
          
          <Route path="/property/:id" element={
            <main className="main-content" style={{ paddingTop: '80px' }}>
              <PropertyDetailPage />
            </main>
          } />
          
          <Route path="/properties" element={
            <main className="main-content" style={{ paddingTop: '80px' }}>
              <Properties />
            </main>
          } />
        </Routes>
        
        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand">
                <img src={logoImage} alt="webapp" className="footer-logo" />
                <p className="footer-desc">Curators of ultra-premium real estate for the world's most discerning individuals. Organic minimalism meets ultimate luxury.</p>
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-heading font-heading">Navigation</h4>
                <a href="/#properties" className="footer-link">Properties</a>
                <a href="/#about" className="footer-link">About Us</a>
                <a href="/#services" className="footer-link">Services</a>
                <a href="/#contact" className="footer-link">Contact</a>
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-heading font-heading">Legal</h4>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Fair Housing</a>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} webapp. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
