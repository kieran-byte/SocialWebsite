// components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Circle Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
