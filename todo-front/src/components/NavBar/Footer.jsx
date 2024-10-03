import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Assuming you'll have some CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            We are committed to delivering the best products and services to our customers. Stay
            connected with us through our social media channels.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <CiFacebook size={50}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={50} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={50} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube size={50} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@yourwebsite.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
