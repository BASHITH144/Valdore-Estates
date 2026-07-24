import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Trophy, Users } from 'lucide-react';
import { siteContent } from '../data/content';
import './ValdoreImpact.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const ValdoreImpact = () => {
  const { impact } = siteContent;
  
  const icons = [
    <Globe size={20} className="stat-icon" />,
    <Trophy size={20} className="stat-icon" />,
    <Users size={20} className="stat-icon" />
  ];

  const stats = impact.stats.map((stat, idx) => ({
    ...stat,
    icon: icons[idx % icons.length]
  }));

  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        
        {/* Left Column: Text Content */}
        <motion.div
          className="impact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="impact-title font-heading"
            variants={itemVariants}
          >
            {impact.title} <span className="text-gold">{impact.titleHighlight}</span>
          </motion.h2>
          
          <motion.p className="impact-subtitle" variants={itemVariants}>
            {impact.subtitle}
          </motion.p>
          
          <motion.div className="impact-actions" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              {impact.primaryButtonText}
            </a>
            <a href="#about" className="btn btn-outline" style={{ marginLeft: '16px' }}>
              {impact.secondaryButtonText}
            </a>
          </motion.div>
          
          <motion.div className="impact-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <div className="stat-text">
                  <p className="stat-value font-heading">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="impact-collage"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative Shapes (Luxurious) */}
          <motion.div
            className="decorative-shape shape-1"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="decorative-shape shape-2"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />
          <motion.div
            className="decorative-shape shape-3"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '1s' }}
          />

          {/* Images */}
          <motion.div
            className="collage-image-container img-1"
            variants={imageVariants}
          >
            <img src={images[0]} alt="Luxury interior" className="collage-img" />
          </motion.div>
          
          <motion.div
            className="collage-image-container img-2"
            variants={imageVariants}
          >
            <img src={images[1]} alt="Architectural exterior" className="collage-img" />
          </motion.div>
          
          <motion.div
            className="collage-image-container img-3"
            variants={imageVariants}
          >
            <img src={images[2]} alt="Modern estate" className="collage-img" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ValdoreImpact;
