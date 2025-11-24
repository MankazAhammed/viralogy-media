import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/WhyViralogyMedia.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faWandMagicSparkles,
  faChartLine,
  faBolt,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const reasons = [
  {
    icon: faFlask,
    title: "Battle-Tested Strategy",
    body: "We've grown accounts from scratch and managed campaigns at scale. We know what works and what doesn’t.",
  },
  {
    icon: faWandMagicSparkles,
    title: "Creative That Converts",
    body: "Our content doesn’t just look good. It’s engineered to engage, convert, and build lasting audience relationships.",
  },
  {
    icon: faChartLine,
    title: "Data-Driven Results",
    body: "Every decision is backed by analytics. Every campaign is measured. Every strategy is optimised for maximum ROI.",
  },
  {
    icon: faBolt,
    title: "Fast Execution, Lasting Impact",
    body: "We move at the speed of culture while building brands that stand the test of time.",
  },
];

export default function WhyViralogyMedia() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="why-viralogy" className="section-why">
      <div className="container why-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="why-left"
        >
          <p className="why-kicker">Why</p>
          <h2 className="sec-title why-title">Viralogy Media?</h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="why-right"
        >
          <div className="why-accordion">
            {reasons.map((r, index) => {
              const isOpen = activeIndex === index;
              return (
                <button
                  key={r.title}
                  type="button"
                  className={`why-item ${isOpen ? "why-item-open" : ""}`}
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                >
                  <div className="why-item-header">
                    <div className="why-item-icon-wrap">
                      <FontAwesomeIcon
                        icon={r.icon}
                        className="why-item-icon"
                      />
                    </div>
                    <div className="why-item-text">
                      <h3 className="why-item-title">{r.title}</h3>
                      {isOpen && <p className="why-item-body">{r.body}</p>}
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="why-chevron"
                  />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
