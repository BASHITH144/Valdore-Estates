import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import './ResponsiveHeroBanner.css';

const ResponsiveHeroBanner = ({
    logoUrl,
    backgroundImageUrl,
    backgroundVideoUrl, // New prop for video
    backgroundVideoUrls = [], // Array for multiple videos
    isDarkMode = true, // default theme state
    toggleTheme, // toggle function
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Properties", href: "#properties" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" }
    ],
    ctaButtonText = "Contact Broker",
    ctaButtonHref = "https://wa.me/94771234567",
    badgeLabel = "Exclusive",
    badgeText = "Premium Residential & Commercial Listings",
    title = "Discover Luxury Living",
    titleLine2 = "With webapp",
    description = "Explore our handpicked selection of ultra-premium properties designed for sophisticated lifestyles. Exceptional locations, unmatched craftsmanship, and seamless client support.",
    primaryButtonText = "View Properties",
    primaryButtonHref = "#properties",
    secondaryButtonText = "Inquire Now",
    secondaryButtonHref = "https://wa.me/94771234567",
    partnersTitle = "Trusted by elite architectural and development partners nationwide",
    partners = []
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Collect all videos
    const allVideos = backgroundVideoUrls.length > 0 
        ? backgroundVideoUrls 
        : (backgroundVideoUrl ? [backgroundVideoUrl] : []);

    useEffect(() => {
        if (allVideos.length > 0) {
            const shuffled = [...allVideos].sort(() => Math.random() - 0.5);
            setPlaylist(shuffled);
            setCurrentVideoIndex(0);
        }
    }, [JSON.stringify(allVideos)]);

    const handleVideoEnd = () => {
        if (playlist.length > 1) {
            setCurrentVideoIndex((prev) => (prev + 1) % playlist.length);
        }
    };

    const activeVideoUrl = playlist.length > 0 ? playlist[currentVideoIndex] : null;

    return (
        <section className="hero-banner">
            {/* Background Overlay & Image/Video */}
            <div className="hero-bg-container">
                {activeVideoUrl ? (
                    <video
                        key={activeVideoUrl}
                        src={activeVideoUrl}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="hero-bg-media"
                    />
                ) : (
                    <img
                        src={backgroundImageUrl}
                        alt="Luxury Estate Background"
                        className="hero-bg-media"
                    />
                )}
                <div className="hero-bg-overlay" />
            </div>

            {/* Header / Navigation */}
            <header className="hero-header">
                <div className="hero-header-inner">
                    <div className="hero-header-content">
                        {/* Logo */}
                        <a href="#" className="hero-logo-wrapper">
                            {logoUrl ? (
                                <img src={logoUrl} alt="webapp" className="hero-logo-img" />
                            ) : (
                                <div className="hero-text-logo">
                                    <span className="hero-text-logo-main">WEBAPP</span>
                                    <span className="hero-text-logo-sub">ESTATES</span>
                                </div>
                            )}
                        </a>

                        {/* Desktop Nav Links */}
                        <nav className="hero-desktop-nav">
                            <div className="hero-nav-pill">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`hero-nav-link ${link.isActive ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={ctaButtonHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero-cta-btn"
                                >
                                    {ctaButtonText}
                                    <ArrowRight size={16} />
                                </a>
                                {toggleTheme && (
                                    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
                                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                                    </button>
                                )}
                            </div>
                        </nav>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="hero-mobile-toggle"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu Drawer */}
                <div className={`hero-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <button 
                        className="hero-mobile-menu-close" 
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`hero-mobile-link ${link.isActive ? 'active' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={ctaButtonHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-mobile-cta"
                    >
                        {ctaButtonText}
                    </a>
                </div>
            </header>

            {/* Main Hero Content Area */}
            <div className="hero-main-content">
                <div className="hero-main-inner">
                    <div className="hero-text-center">
                        {/* Announcement Badge */}
                        <div className="hero-badge-container">
                            <span className="hero-badge-label">{badgeLabel}</span>
                            <span className="hero-badge-text">{badgeText}</span>
                        </div>

                        {/* Main Captions */}
                        <h1 className="hero-title font-heading">
                            {title}
                            <br className="hero-title-break" />
                            <span className="hero-title-gradient"> {titleLine2}</span>
                        </h1>

                        <p className="hero-description">
                            {description}
                        </p>

                        {/* Action Callouts */}
                        <div className="hero-actions-container">
                            <a href={primaryButtonHref} className="hero-action-primary">
                                {primaryButtonText}
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href={secondaryButtonHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-action-secondary"
                            >
                                {secondaryButtonText}
                            </a>
                        </div>
                    </div>

                    {/* Partner Showcase Footer Area */}
                    {partners.length > 0 && (
                        <div className="hero-partners-container">
                            <p className="hero-partners-title">{partnersTitle}</p>
                            <div className="hero-partners-grid">
                                {partners.map((partner, index) => (
                                    <a
                                        key={index}
                                        href={partner.href}
                                        className="hero-partner-logo"
                                        style={{ backgroundImage: `url(${partner.logoUrl})` }}
                                        aria-label={`Partner ${index}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
