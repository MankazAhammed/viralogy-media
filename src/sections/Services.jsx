import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Services.css"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    icon: "fa-pen-nib",
    title: "Strategic Content Writing",
    desc:
      "Compelling copy that reflects your authentic voice while positioning you as an authority—LinkedIn posts, long-form articles, email campaigns, and website copy.",
    bullets: [
      "Voice & tone development",
      "Thought-leadership articles",
      "Email & website funnels",
    ],
  },
  {
    icon: "fa-share-nodes",
    title: "Social Media Management",
    desc:
      "We don't just post—we build communities. Strategy, calendars, daily posting, engagement, comments, and DMs across Instagram, Facebook, and X/Twitter.",
    bullets: [
      "End-to-end content ops",
      "Community & DM management",
      "Analytics & growth loops",
    ],
  },
  {
    icon: "fa-bullseye",
    title: "Brand Strategy & Positioning",
    desc:
      "Define your unique value proposition, craft a cohesive brand voice, and align content strategy to business goals that connect with your ideal audience.",
    bullets: [
      "UVP & messaging architecture",
      "Audience personas",
      "Content roadmap & KPIs",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="services" className="section-services">
      <div className="container">
        <h2 className="sec-title center">What We Do</h2>
        <p className="sec-sub center">
          From strategy to execution, we craft content engines that compound—so
          your brand keeps resonating long after the post goes live.
        </p>

        <motion.div
          className="services-accordion-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="services-accordion">
            {services.map((s, index) => {
              const isOpen = activeIndex === index;

              return (
                <div className="accordion-item" key={s.title}>
                  <button
                    type="button"
                    className="accordion-header"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="accordion-title-block">
                      <i className={`fa-solid ${s.icon}`} />
                      <div>
                        <h3 className="accordion-title">{s.title}</h3>
                      </div>
                    </div>
                    <i
                      className={`fa-solid ${
                        isOpen ? "fa-chevron-up" : "fa-chevron-down"
                      } accordion-chevron`}
                    />
                  </button>

                  {isOpen && (
                    <div className="accordion-panel">
                      <p className="accordion-desc">{s.desc}</p>
                      <ul className="accordion-list">
                        {s.bullets.map((b) => (
                          <li key={b}>
                            <i className="fa-regular fa-circle-check" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <a href="#contact" className="accordion-link">
                        Start now <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
