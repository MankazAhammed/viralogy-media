import React from "react";
import "../styles/Navbar.css";
import logo_bg from "../assets/logo_bg_removed.png";
const CALENDAR_URL = "https://calendar.app.google/1KfiF3u9EradFXnZ7";

export default function Navbar() {
  return (
    <header className="nv-root">
      <div className="nv-inner">
        <a href="#hero" className="nv-logo-wrap">
          <img src={logo_bg} className="nv-logo" alt="Viralogy Media logo" />
        </a>

        <nav className="nv-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why-viralogy">Why Viralogy?</a>
          <a href="#approach">Approach</a>
          <a href="#brand-services">Brand Services</a>
          <a href="#contact">Contact</a>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="nv-cta"
          >
            <span>Book a Call</span>
          </a>
        </nav>

        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noreferrer"
          className="nv-cta nv-cta-mobile"
        >
          <span>Book</span>
        </a>
      </div>
    </header>
  );
}
