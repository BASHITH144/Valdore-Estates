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
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { propertiesData, siteContent } from './data/content';
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

  // Fetch main images for the marquee from properties data (newest first)
  const allPropertyImages = [...propertiesData].reverse().map(p => p.mainImage);

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
                {...siteContent.hero}
              />
              <main className="main-content">
                <PropertyMarquee 
                  tagline={siteContent.marquee.tagline}
                  title={<>{siteContent.marquee.titleLine1} <br/>{siteContent.marquee.titleLine2}</>}
                  description={siteContent.marquee.description}
                  ctaText={siteContent.marquee.ctaText}
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
                <img src={logoImage} alt="Valdore Estates" className="footer-logo" />
                <p className="footer-desc">{siteContent.footer.description}</p>
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-heading font-heading">Navigation</h4>
                {siteContent.footer.navLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="footer-link">{link.label}</a>
                ))}
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-heading font-heading">Legal</h4>
                {siteContent.footer.legalLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="footer-link">{link.label}</a>
                ))}
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} {siteContent.footer.copyrightText}</p>
              <p className="designed-by">Designed and Developed by TechTitude Labs</p>
            </div>
          </div>
        </footer>
        <FloatingWhatsApp phoneNumber="+94 76 053 4425" />
      </div>
    </Router>
  );
}

export default App;
