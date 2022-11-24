import React from "react";
import "./Footer.css";
import { FaFacebookF,FaLinkedin } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
function Footer() {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Rohit
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Rohit Kumar Das. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
