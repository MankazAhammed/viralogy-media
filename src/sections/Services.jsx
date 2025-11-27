import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "../styles/Services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faVideo,
  faPalette,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    icon: faBullseye,
    title: "Social Media Marketing",
    bullets: [
      "Strategy & Growth",
      "Content Calendars",
      "Community Management",
      "Performance Tracking",
      "Multi-platform Management (Instagram, LinkedIn, Twitter, Facebook)",
    ],
  },
  {
    icon: faPalette,
    title: "Brand & Design",
    bullets: [
      "Web & App Development (on request)",
      "Logo Design",
      "Logo Animation",
      "Social Media Graphics & Templates",
      "Marketing Collateral",
      "Brand Guidelines",
    ],
  },
  {
    icon: faVideo,
    title: "Content Creation",
    bullets: [
      "Copywriting & Storytelling",
      "Event shoots and brand shoots in India (on request)",
      "Visual storytelling",
      "Iphone shoots",
      "Event coverage",
    ],
  },
  {
    icon: faPalette,
    title: "Campaign Management",
    bullets: [
      "Multi-city Campaigns",
      "Product Launches",
      "Event Marketing",
      "Integrated Digital Campaigns",
      "Performance Marketing",
    ],
  },
];

const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container">
        <h2 className="sec-title center">What We Do</h2>
        <p className="sec-sub center">
          We build content and growth systems that make your brand impossible to
          ignore – from strategy and story to execution, distribution and
          optimisation.
        </p>
      
        <motion.div
          className="services-accordion-wrapper services-desktop"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Slider {...sliderSettings} className="services-slider">
            {services.map((s) => (
              <div className="service-slide" key={s.title}>
                <div className="service-card">
                  <div className="service-card-icon">
                    <FontAwesomeIcon icon={s.icon} />
                  </div>
                  <h3 className="service-card-title">{s.title}</h3>
                  <ul className="service-card-list">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="service-card-bullet-icon"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {/* <a href="#contact" className="service-card-cta">
                    Start now <FontAwesomeIcon icon={faArrowRight} />
                  </a> */}
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          className="services-mobile"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s) => (
            <div className="service-card-mobile" key={s.title}>
              <div className="service-card-mobile-header">
                <div className="service-card-mobile-icon">
                  <FontAwesomeIcon icon={s.icon} />
                </div>
                <h3 className="service-card-mobile-title">{s.title}</h3>
              </div>
              <ul className="service-card-mobile-list">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="service-card-mobile-bullet-icon"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-card-mobile-cta">
                Start now <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
