import React from "react";
import { motion } from "framer-motion";
import "../styles/ApproachSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ApproachSection() {
  return (
    <section id="approach" className="section-approach">
      <div className="container">
        <motion.div
          className="approach-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="approach-line-main">Our approach is simple:</p>
          <p className="approach-line-body">
            Listen deeply. Strategise smartly. Execute flawlessly.
            <br className="approach-line-break" />
            Measure everything.
          </p>
          <p className="approach-cta">
            Ready to grow?{" "}
            <span className="approach-cta-strong">
              Let’s make it happen.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
