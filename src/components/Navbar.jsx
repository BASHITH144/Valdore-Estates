import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/Valdore Estates Logo 2.png';

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
        <a href="#" className="navbar-brand">
          <img src={logo} alt="webapp Logo" className="navbar-logo" />
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
