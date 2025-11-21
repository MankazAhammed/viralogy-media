import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  return (
    <div id="hero" className="hero-wrap">

      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="hero-left"
          >
            <motion.h1 variants={fadeUp} className="hero-title">
              Where Your Brand <span>Finds Its Voice</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-sub">
              We don't just create content — we create connections that matter.
              Resonance Media is a full-service marketing agency building
              authentic personal brands and powerful digital presences that{" "}
              <strong>resonate</strong>.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-cta-row">
              <a href="#contact" className="btn-primary">
                <i className="fa-solid fa-arrow-right" />
                <span>Book Your Free Discovery Call</span>
              </a>
              <a href="#services" className="btn-ghost">
                <span>Explore Services</span>
              </a>
            </motion.div>

            <motion.ul variants={fadeUp} className="hero-bullets">
              <li>
                <i className="fa-regular fa-circle-check" />
                Strategic content that gets remembered
              </li>
              <li>
                <i className="fa-regular fa-circle-check" />
                Community-first social media
              </li>
              <li>
                <i className="fa-regular fa-circle-check" />
                Brand positioning that converts
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hero-right"
          >
            <div className="mockup">
              <div className="mockup-left" />
              <div className="mockup-right">
                <div className="mock-title" />
                <div className="mock-sub" />
                <div className="mock-lines"/>
                <div className="mock-buttons">
                  <div className="mock-btn mock-btn-brand" />
                  <div className="mock-btn mock-btn-gray" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
