import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import banner from "../assets/banner.png";

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
              We Strategise
              <span>You Go Viral</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-sub">
              We engineer viral moments that drive real growth. From content
              that converts to campaigns that cut through the noise, your
              brand’s breakthrough starts here.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-cta-row">
              <a href="#contact" className="btn-primary">
                <i className="fa-solid fa-arrow-right" />
                <span>Book Your Free Consultation</span>
              </a>
              <a href="#services" className="btn-ghost">
                <span>Explore Our Services</span>
              </a>
            </motion.div>

            <motion.ul variants={fadeUp} className="hero-bullets">
              <li>
                <i className="fa-regular fa-circle-check" />
                Battle-tested strategy that actually works
              </li>
              <li>
                <i className="fa-regular fa-circle-check" />
                Creative that converts and builds communities
              </li>
              <li>
                <i className="fa-regular fa-circle-check" />
                Data-driven campaigns optimised for ROI
              </li>
              <li>
                <i className="fa-regular fa-circle-check" />
                Fast execution at the speed of culture
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
            <motion.div
              className="mockup"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mockup-left">
                <img
                  src={banner}
                  alt="Viralogy Media campaign strategy banner"
                  className="hero-banner-img"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
