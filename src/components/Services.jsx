import React from 'react';
import { Diamond, ShieldCheck, Key } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <ShieldCheck size={40} className="service-icon" />,
      title: 'Private Acquisitions',
      description: 'Discreet and exclusive representation for high-net-worth individuals seeking off-market legacy properties.'
    },
    {
      icon: <Diamond size={40} className="service-icon" />,
      title: 'Design Consultation',
      description: 'Partnering with elite architectural firms to ensure properties reflect true organic minimalist principles.'
    },
    {
      icon: <Key size={40} className="service-icon" />,
      title: 'Turnkey Management',
      description: 'Comprehensive estate management services ensuring a seamless transition and perfect maintenance.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title font-heading">
            Bespoke <span className="text-gold">Services</span>
          </h2>
          <div className="services-divider"></div>
          <p className="services-subtitle">
            Beyond brokering estates, Valdore offers a suite of premium concierge services to cater to every facet of luxury lifestyle management.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title font-heading">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
