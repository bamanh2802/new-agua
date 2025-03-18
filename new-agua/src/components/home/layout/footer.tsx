import React from "react";
import "./footer.css"; // Import CSS nếu có
import logo from "/assets/AGUA Logo_Color.png";


const Footer = () => {
  return (
    <footer className="text-center text-muted py-4">
      <img src="/assets/AGUA Logo_Color.png" alt="Logo" width="170" />


      {/* Link nhóm */}
      <div className="link-group mt-5" data-aos="fade-up">
        <a href="#home">Home</a>
        <div className="vr"></div>
        <a href="#about">About us</a>
        <div className="vr"></div>
        <a href="#service">Agua story</a>
        <div className="vr"></div>
        <a href="#portfolio">News</a>
        <div className="vr"></div>
        <a href="#contact">Contact</a>
      </div>

      {/* Social Links */}
      <div className="social-links mt-5" data-aos="fade-up">
        <button className="rounded-pill dribble">
          <i className="bi bi-instagram"></i>
        </button>
        <button className="rounded-pill whatsapp">
          <i className="bi bi-whatsapp"></i>
        </button>
        <button className="rounded-pill behance">
          <i className="bi bi-twitter"></i>
        </button>
      </div>

      <hr className="text-muted my-4" />
      <p>&copy; All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
