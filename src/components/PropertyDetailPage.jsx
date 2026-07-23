import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertiesData } from '../properties';
import { ArrowLeft, CheckCircle, Map } from 'lucide-react';
import './PropertyDetail.css';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));
  
  // Default to mainImage if property found, otherwise null
  const [activeImage, setActiveImage] = useState(property ? property.mainImage : null);

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
            
            <div className="detail-divider"></div>
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
              <svg className="whatsapp-icon" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.66.988 3.411 1.505 5.41 1.505 5.548 0 10.064-4.512 10.068-10.058.002-2.686-1.037-5.212-2.925-7.101C17.306 1.611 14.787.572 12.11.572 6.558.572 2.043 5.086 2.039 10.63c-.001 2.01.523 3.976 1.516 5.68l-.999 3.648 3.733-.979zm11.368-6.712c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.463.132-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-.775-1.2-1.075-1.777-.294-.58-.598-.48-.775-.49-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.775.35-.25.275-.95.928-.95 2.261 0 1.333.975 2.624 1.1 2.801.125.177 1.92 2.933 4.652 4.116.65.28 1.157.446 1.552.571.654.208 1.25.179 1.72.109.525-.078 1.78-.727 2.03-1.43.25-.704.25-1.306.175-1.43-.075-.124-.275-.199-.575-.349z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
