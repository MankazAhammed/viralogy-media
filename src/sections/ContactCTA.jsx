import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerTiles = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function ContactCTA() {
  return (
    <section id="contact" className="section-contact">
      <div className="container contact-wrapper">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="contact-heading"
        >
          <h2 className="contact-main-title">How to Book an Enquiry</h2>
          <p className="contact-subtitle">
            Ready to amplify your voice? Getting started with Resonance Media is
            simple.
          </p>
        </motion.div>

        <motion.div
          className="contact-tiles"
          variants={staggerTiles}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="contact-tile">
            <p className="contact-step-label">STEP 1</p>
            <h3 className="contact-tile-title">
              Schedule Your Free Discovery Call
            </h3>
            <p className="contact-tile-body">
              Book a complimentary 30-minute session to discuss your goals,
              challenges, and your vision.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="contact-tile">
            <p className="contact-step-label">STEP 2</p>
            <h3 className="contact-tile-title">
              Receive Your Custom Strategy
            </h3>
            <p className="contact-tile-body">
              Get a tailored proposal with our approach, timeline, and
              investment to hit your goals.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="contact-tile">
            <p className="contact-step-label">STEP 3</p>
            <h3 className="contact-tile-title">Launch &amp; Grow</h3>
            <p className="contact-tile-body">
              We onboard, create, and manage your content presence—focused on
              moving the needle.
            </p>
          </motion.div>
        </motion.div>

        {/* <p className="contact-footer-note">
          Email us at <strong>work.resonancemedia@gmail.com</strong> or call{" "}
          <strong>+91 8287492055</strong> to book your discovery call.
        </p> */}
      </div>
    </section>
  );
}
