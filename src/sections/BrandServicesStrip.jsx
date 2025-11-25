import React from "react";
import { motion } from "framer-motion";
import "../styles/BrandServicesStrip.css";

import brandImage from "../assets/strategy_section.png";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BrandServicesStrip() {
  return (
    <section id="brand-services" className="brand-strip-section">
      <div className="container">
        <motion.div
          className="brand-strip-image-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src={brandImage}
            alt="Brand identity and strategy"
            className="brand-strip-image"
          />
        </motion.div>
        <motion.div
          className="brand-strip-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="brand-strip-item">
            <h3 className="brand-strip-title">Strategic Content Writing</h3>
            <div className="brand-strip-divider">
              <span />
              <span />
            </div>
            <p className="brand-strip-text">
              Our team crafts compelling copy that reflects your authentic voice
              while strategically positioning you as an authority. From LinkedIn
              posts and articles to email campaigns and website copy, every word
              is designed to resonate with your target audience.
            </p>
          </div>

          <div className="brand-strip-item">
            <h3 className="brand-strip-title">Social Media Management</h3>
            <div className="brand-strip-divider">
              <span />
              <span />
            </div>
            <p className="brand-strip-text">
              We don&apos;t just post – we build communities. Our full-service
              social media management includes content strategy, daily posting,
              community engagement, comment management and DM responses across
              Instagram, Facebook and Twitter.
            </p>
          </div>

          <div className="brand-strip-item">
            <h3 className="brand-strip-title">Brand Strategy &amp; Positioning</h3>
            <div className="brand-strip-divider">
              <span />
              <span />
            </div>
            <p className="brand-strip-text">
              We help you define and refine your unique value proposition,
              develop a cohesive brand voice, and create a content strategy that
              aligns with your business goals and connects with your ideal
              audience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
