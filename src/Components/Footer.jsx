import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Style/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-logo">
          <h2>Game Seek</h2>
          <p>Start your game with the best</p>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Services</h4>
            <ul>
              <li>Gift Card</li>
              <li>Mobile App</li>
              <li>Shipping & Delivery</li>
              <li>Order Pickup</li>
              <li>Account Signup</li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li>ShopCart Help</li>
              <li>Returns</li>
              <li>Track Orders</li>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Security & Fraud</li>
            </ul>
          </div>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Press Center</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>GS</p>
        </div>
        <div className="footer-bottom-center">
          <a href="#">Help Center</a>
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-bottom-right">
          <p>&copy; All rights reserved by GameSeek | 2024</p>
        </div>
      </div>
    </footer>
  );
}
