import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PropertyMarquee.css';

const ActionButton = ({ children, to }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="marquee-action-btn"
  >
    {children}
  </motion.button>
);

const PropertyMarquee = ({
  tagline,
  title,
  description,
  ctaText,
  ctaLink = "#properties",
  images
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="marquee-hero-section">
      <div className="marquee-content-wrapper">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="marquee-tagline"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="marquee-title"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="marquee-description"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_IN_ANIMATION_VARIANTS}
        >
          <a href={ctaLink}>
            <ActionButton>{ctaText}</ActionButton>
          </a>
        </motion.div>
      </div>

      <div className="marquee-bottom-container">
        <motion.div
          className="marquee-track"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="marquee-image-wrapper"
              style={{
                rotate: `${(index % 2 === 0 ? -3 : 4)}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase ${index + 1}`}
                className="marquee-image"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyMarquee;
