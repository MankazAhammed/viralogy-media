import React from "react";
import "../styles/Navbar.css";
import logo_bg from "../assets/logo_bg_removed.png";

export default function Navbar() {
  return (
    <header className="nv-root">
      <div className="nv-inner">
          <img src = {logo_bg} className="nv-logo"/>

        <nav className="nv-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="nv-cta">
            <span>Book a Call</span>
          </a>
        </nav>

        <a href="#contact" className="nv-cta nv-cta-mobile">
          <i className="fa-solid fa-calendar-check" />
          <span>Book</span>
        </a>
      </div>
    </header>
  );
}
