import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      {/* LEFT INFORMATION */}
      <div className="footer-info">

        <div className="footer-section">
          <div className="footer-title">
            INFO
          </div>

          <a href="#pricing">PRICING</a>
          <a href="#about">ABOUT</a>
          <a href="#contacts">CONTACTS</a>
        </div>


        <div className="footer-section footer-languages">

          <div className="footer-title">
            LANGUAGES
          </div>

          <div className="language-row">
            <span>ENG</span>
            <span>/</span>
          </div>

          <div className="language-row">
            <span>ESP</span>
            <span>/</span>
          </div>

          <div className="language-row">
            <span>SVE</span>
          </div>

        </div>

      </div>


      {/* CENTER LOGO */}
      <div className="footer-center">

        <div className="technology-title">
          * TECHNOLOGIES
        </div>

        <div className="footer-logo">

          <div className="logo-top">
            <span className="logo-symbol"></span>
            <span className="logo-fade">QR</span>
          </div>

          <div className="logo-xiv">
            XIV
          </div>

          <div className="logo-qr">
            QR
          </div>

        </div>

      </div>


      {/* TECHNOLOGY DESCRIPTION */}
      <div className="technology-description">

        <span>
          Near-field communication
        </span>

        <span className="technology-slash">
          /
        </span>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <span className="copyright">
          © 2024 — copyright
        </span>

        <span className="privacy">
          privacy
        </span>

      </div>

    </footer>
  );
}