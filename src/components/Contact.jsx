import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          
          <div className="contact-info-column">
            <h2 className="contact-title font-heading mb-6">Private <span className="text-gold">Inquiries</span></h2>
            <div className="contact-divider mb-8"></div>
            
            <p className="contact-text mb-10">
              For discrete viewings, off-market opportunities, or representation, please reach out to our dedicated team of luxury property advisors. We ensure utmost confidentiality and exceptional service.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <h4 className="contact-item-title font-heading">Global Headquarters</h4>
                  <p className="contact-item-text">9800 Wilshire Blvd, Suite 200<br/>Beverly Hills, CA 90212</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <h4 className="contact-item-title font-heading">Direct Line</h4>
                  <p className="contact-item-text">+1 (310) 555-0198</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <h4 className="contact-item-title font-heading">Email</h4>
                  <p className="contact-item-text">inquiries@valdore.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-column">
            <form className="contact-form">
              <h3 className="form-title font-heading mb-8">Request a Consultation</h3>
              
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
                Submit Inquiry <ArrowRight size={16} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
