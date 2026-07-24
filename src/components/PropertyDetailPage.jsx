import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertiesData } from '../data/content';
import { ArrowLeft, CheckCircle, Map } from 'lucide-react';
import './PropertyDetail.css';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));
  
  // Default to mainImage if property found, otherwise null
  const [activeImage, setActiveImage] = useState(property ? property.mainImage : null);
  const [activeLanguage, setActiveLanguage] = useState('english');

  if (!property) {
    return (
      <div className="property-not-found">
        <h2>Listing Not Found</h2>
        <Link to="/" className="btn btn-outline">Return to Properties</Link>
      </div>
    );
  }

  return (
    <div className="property-detail-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Back to Listings
      </Link>

      <div className="property-detail-grid">
        
        {/* Dynamic Image Gallery Stack */}
        <div className="gallery-section">
          <div className="main-image-container">
            <img src={activeImage} alt={property.title} className="main-gallery-image" />
          </div>
          <div className="thumbnail-strip">
            {property.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`thumbnail-btn ${activeImage === img ? 'active' : ''}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="thumbnail-img" />
              </button>
            ))}
          </div>
        </div>

        {/* Informational Panel */}
        <div className="info-section">
          <div>
            <span className="detail-location">{property.location}</span>
            <h1 className="detail-title font-heading">{property.title}</h1>
            <div className="detail-price">{property.priceDisplay}</div>
            
            <div className="detail-divider"></div>
            
            <h3 className="overview-title font-heading">Property Overview</h3>
            <p className="detail-description">
              {property.description}
            </p>

          </div>

          {/* Broker Connect Panel */}
          <div className="broker-panel">
            <div className="broker-info">
              <p className="broker-label">Assigned Broker Agent</p>
              <p className="broker-name font-heading">Valdore Estates Representative</p>
            </div>
            <a 
              href={`https://wa.me/${property.brokerNumber.replace('+', '')}?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(property.title)}`}
              target="_blank"
              rel="noreferrer"
              className="broker-action-btn"
            >
              <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="extended-info-section">
        {/* Property Features */}
        {property.features && (
          <div className="property-features">
            <h3 className="overview-title font-heading">Exceptional Features</h3>
            <ul className="features-grid">
              {property.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <CheckCircle className="feature-icon" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Location Profile */}
        {property.locationDetails && (
          <div className="location-profile">
            <h3 className="overview-title font-heading">Location Profile</h3>
            <div className="location-card">
              <div className="location-icon-wrapper">
                <Map className="location-icon" size={24} />
              </div>
              <p className="detail-description location-text">
                {property.locationDetails}
              </p>
            </div>
          </div>
        )}
        
        {/* Bilingual Tables */}
        {property.detailsTables && (
          <div className="property-tables">
            <div className="language-tabs">
              <button 
                className={`lang-tab-btn ${activeLanguage === 'english' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('english')}
              >
                English
              </button>
              <button 
                className={`lang-tab-btn ${activeLanguage === 'sinhala' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('sinhala')}
              >
                සිංහල (Sinhala)
              </button>
            </div>

            {activeLanguage === 'english' && (
              <div className="table-container">
                <h3 className="overview-title font-heading">Property Details</h3>
                <div className="details-grid-container">
                  {property.detailsTables.english.map((row, idx) => (
                    <div className="detail-grid-item" key={idx}>
                      <div className="detail-grid-label">{row.label}</div>
                      <div className="detail-grid-value">{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeLanguage === 'sinhala' && (
              <div className="table-container">
                <h3 className="overview-title font-heading">දේපල විස්තර</h3>
                <div className="details-grid-container sinhala-text">
                  {property.detailsTables.sinhala.map((row, idx) => (
                    <div className="detail-grid-item" key={idx}>
                      <div className="detail-grid-label">{row.label}</div>
                      <div className="detail-grid-value">{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailPage;
