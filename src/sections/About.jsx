import React from "react";
import "../styles/About.css";
import image_one from "../assets/Image_one.jpg";

export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            src={image_one}
            alt="Resonance Media founders collaborating"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Us</h2>

          <p className="about-kicker">
            <em>Turning brands viral, one strategy at a time</em>
          </p>

          <p className="about-label">About us:</p>
          <p className="about-body">
            We’re <strong>Resonance Media</strong>, a marketing agency where
            strategy meets creativity.
          </p>

          <h3 className="about-subheading">Two founders. Two specialties.</h3>

          <p className="about-body">
            One mission: to help brands grow authentically in the digital age.
          </p>
          <p className="about-body">
            One of us lives and breathes digital marketing strategy. The other
            crafts visual identities that stop people mid-scroll. Together,
            we’ve built an agency that delivers both beautiful design and
            measurable results.
          </p>
          <p className="about-body">
            We’ve grown social accounts by 500%, managed campaigns across
            multiple cities, and helped brands find their voice in crowded
            markets. Our secret? We’re Gen Z natives who understand this
            landscape instinctively, backed by real-world experience that proves
            we can deliver.
          </p>

          <p className="about-strong">
            <strong>
              No fluff. No templates. Just smart strategy, killer creative, and
              results you can measure.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
