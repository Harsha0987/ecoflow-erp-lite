import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EcoFlow ERP Lite</p>
        <p>Designed with sustainability in mind</p>
      </div>
    </footer>
  );
};

export default Footer;
