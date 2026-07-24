import React, { useState, useMemo } from 'react';
import { BedDouble, Bath, Maximize, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { propertiesData } from '../data/content';
import './Properties.css';

const Properties = () => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Extract unique locations and types dynamically from data for the dropdowns
  const locations = useMemo(() => [...new Set(propertiesData.map(p => p.location))], []);
  const types = useMemo(() => [...new Set(propertiesData.map(p => p.type))], []);

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    let result = [...propertiesData].reverse();

    // 1. Text Search Filter
    if (searchTerm.trim() !== '') {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Location Filter
    if (selectedLocation) {
      result = result.filter(p => p.location === selectedLocation);
    }

    // 3. Property Type Filter
    if (selectedType) {
      result = result.filter(p => p.type === selectedType);
    }

    // 4. Maximum Budget Filter
    if (maxPrice) {
      result = result.filter(p => p.priceNumeric <= parseInt(maxPrice));
    }

    // 5. Sorting Logic
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return result;
  }, [searchTerm, selectedLocation, selectedType, maxPrice, sortBy]);

  // Reset helper
  const handleReset = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedType('');
    setMaxPrice('');
    setSortBy('');
  };

  return (
    <section id="properties" className="properties-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title font-heading">Find Your Ideal <span className="text-gold">Property</span></h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Filter through elite listings customized to your precise tastes.
          </p>
        </div>

        {/* Modern Filter Panel Bar */}
        <div className="filter-panel">
          <div className="filter-group">
            <label className="filter-label">Search Keyword</label>
            <input 
              type="text" 
              placeholder="e.g., Villa, Land..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-input"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Location</label>
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="filter-input"
            >
              <option value="">All Locations</option>
              {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Property Type</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-input"
            >
              <option value="">All Types</option>
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Max Budget</label>
            <select 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)}
              className="filter-input"
            >
              <option value="">No Maximum</option>
              <option value="400000">Under $400,000</option>
              <option value="900000">Under $900,000</option>
              <option value="1500000">Under $1,500,000</option>
              <option value="10000000">Under $10,000,000</option>
              <option value="25000000">Under $25,000,000</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-input"
            >
              <option value="">Default order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Control Status and Reset Section */}
        <div className="filter-status-bar">
          <p className="filter-status-text">
            Showing <span>{filteredProperties.length}</span> luxury listings
          </p>
          {(searchTerm || selectedLocation || selectedType || maxPrice || sortBy) && (
            <button onClick={handleReset} className="filter-reset-btn">
              <X size={14} /> Clear All Filters
            </button>
          )}
        </div>

        {/* Filtered Grid Output */}
        {filteredProperties.length === 0 ? (
          <div className="empty-state">
            <p>No properties match your current filter preferences.</p>
            <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: '20px' }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="properties-grid">
            {filteredProperties.map((property) => (
              <div className="property-card" key={property.id}>
                <div className="property-image-wrapper">
                  <img src={property.mainImage} alt={property.title} className="property-image" />
                  <div className="property-price">{property.priceDisplay}</div>
                  <div className="property-type-badge">{property.type}</div>
                </div>
                <div className="property-content">
                  <p className="property-location">{property.location}</p>
                  <h3 className="property-title font-heading">{property.title}</h3>
                  
                  {/* Only show amenities if they exist (hide for Land) */}
                  {(property.beds > 0 || property.baths > 0) && (
                    <div className="property-metrics">
                      <div className="metric">
                        <BedDouble size={18} className="metric-icon" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="metric">
                        <Bath size={18} className="metric-icon" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="metric">
                        <Maximize size={18} className="metric-icon" />
                        <span>{property.sqft} SqFt</span>
                      </div>
                    </div>
                  )}

                  {/* Show only SqFt for Land */}
                  {property.type === 'Land' && (
                    <div className="property-metrics" style={{ borderTop: 'none', paddingTop: 0 }}>
                      <div className="metric">
                        <Maximize size={18} className="metric-icon" />
                        <span>{property.sqft} SqFt</span>
                      </div>
                    </div>
                  )}

                  <Link to={`/property/${property.id}`} className="property-link">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="properties-footer">
          <Link to="/properties" className="btn btn-outline">View All Properties</Link>
        </div>
      </div>
    </section>
  );
};

export default Properties;
