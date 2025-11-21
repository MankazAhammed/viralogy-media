import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft-root">
      <div className="ft-inner">
        <div className="ft-brand">
          <div>
            <p className="ft-brand-name">Viralogy Media</p>
            <p className="ft-tagline">Where your brand finds its voice.</p>
          </div>
        </div>

        <div className="ft-meta">
          <p className="ft-copy">
            © {year} Viralogy Media. All rights reserved.
          </p>

          <div className="ft-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
