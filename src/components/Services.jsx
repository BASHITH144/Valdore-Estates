import React from 'react';
import { Diamond, ShieldCheck, Key } from 'lucide-react';
import { siteContent } from '../data/content';
import './Services.css';

const Services = () => {
  const { services: servicesData } = siteContent;
  
  const icons = [
    <ShieldCheck size={40} className="service-icon" />,
    <Diamond size={40} className="service-icon" />,
    <Key size={40} className="service-icon" />
  ];

  const services = servicesData.items.map((item, index) => ({
    ...item,
    icon: icons[index % icons.length]
  }));

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title font-heading">
            {servicesData.title} <span className="text-gold">{servicesData.titleHighlight}</span>
          </h2>
          <div className="services-divider"></div>
          <p className="services-subtitle">
            {servicesData.subtitle}
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
