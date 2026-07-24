import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';
import './Contact.css';

const Contact = () => {
  const { contact } = siteContent;
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          
          <div className="contact-info-column">
            <h2 className="contact-title font-heading mb-6">{contact.title} <span className="text-gold">{contact.titleHighlight}</span></h2>
            <div className="contact-divider mb-8"></div>
            
            <p className="contact-text mb-10">
              {contact.text}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <h4 className="contact-item-title font-heading">{contact.headquartersTitle}</h4>
                  <p className="contact-item-text">{contact.headquartersAddressLine1}<br/>{contact.headquartersAddressLine2}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <h4 className="contact-item-title font-heading">{contact.directLineTitle}</h4>
                  <p className="contact-item-text">{contact.directLineNumber}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <h4 className="contact-item-title font-heading">{contact.emailTitle}</h4>
                  <p className="contact-item-text">{contact.emailAddress}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-column">
            <form className="contact-form">
              <h3 className="form-title font-heading mb-8">{contact.formTitle}</h3>
              
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Full Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Email Address" required />
              </div>
              
              <div className="form-group">
                <input type="tel" className="form-input" placeholder="Phone Number" />
              </div>
              
              <div className="form-group">
                <textarea className="form-input form-textarea" placeholder="How can we assist you?" rows="4" required></textarea>
              </div>
              
              <button type="button" className="btn btn-primary form-submit">
                {contact.formSubmitText} <ArrowRight size={16} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
