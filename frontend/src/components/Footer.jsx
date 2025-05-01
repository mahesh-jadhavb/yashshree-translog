import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Make sure to import the CSS file
import logo from '../assets/Logo1.jpg'; // adjust path based on where Footer.jsx is


const Footer = () => {
  return (
    <footer
      className="footer text-light pt-5 pb-4"
      style={{
        background: 'linear-gradient(90deg, rgb(9, 19, 89), rgba(41,128,185,1))',
      }}
    >
      <Container>
        <Row>
          {/* Logo & About */}
          <Col md={4} className="mb-4">
            <img
              src={logo}
              alt="Yashashree Translog"
              width="160"
              className="mb-3 logo2"
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />


            <p>
              Yashashree Translog Pvt Ltd is a Pune-based transport leader providing safe,
              reliable, and professional transport solutions across India.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
  <li><Link to="/about" className="footer-link">About</Link></li>
  <li><Link to="/service" className="footer-link">Services</Link></li>
  <li><Link to="/safety" className="footer-link">Safety</Link></li>
  <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={5} className="mb-4">
            <h5 className="text-warning">Contact Us</h5>
            <p className="mb-1">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
              +91-8329301102
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              info@yashashreetranslog.com
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Office No: C-310, Westeria Fortune, Bhumkar Chowk, Pimpri Chinchwad, Pune - 411057, Maharashtra
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="me-3" />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="me-3" />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-top border-light my-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Yashashree Translog Pvt Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
