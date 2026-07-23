import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="url(#zap-gradient)" stroke="none">
            <defs>
              <linearGradient id="zap-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="navbar-title" style={{ fontWeight: 600, fontSize: '1.5rem', color: '#fff', letterSpacing: '-0.02em', textTransform: 'lowercase' }}>webapp</span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="#properties" className="nav-link">Properties</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#journal" className="nav-link">Journal</a>
          <a href="#contact" className="btn btn-outline nav-btn">Contact Us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#properties" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Properties</a>
        <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#journal" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Journal</a>
        <a href="#contact" className="mobile-link text-gold" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
