import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckMoving,
  faMapMarkedAlt,
  faCheckCircle,
  faUserTie,
  faShieldAlt,
  faLeaf,
  faTools,
  faHandshake,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Footer from './Footer';
import Navbar from "./Navbar.jsx";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      <div className="spacer"></div>

      <section className="about-section py-5">
        <div className="about-content container">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-img-container position-relative">
                <img
                  src="https://t3.ftcdn.net/jpg/04/09/34/66/360_F_409346621_8d9NAfEHWnNFIVmQxH8yzfNs0f7dHanF.jpg"
                  alt="Fleet of trucks ready for transport by Yashashree Translog"
                  className="about-img img-fluid rounded shadow"
                />

              </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="about-title mb-4">About Yashashree Translog</h2>

              <div className="row g-4 mb-4">
                <div className="col-md-6" data-aos="zoom-in">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faTruckMoving} className="text-primary" size="2x" />
                  </div>
                  <h5 className="text-center">Modern Fleet</h5>
                  <p className="text-muted text-center mb-0">Vehicles under 5 years old, equipped with cutting-edge technology for efficient transportation.</p>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-primary" size="2x" />
                  </div>
                  <h5 className="text-center">Pan India Coverage</h5>
                  <p className="text-muted text-center mb-0">24/7/365 nationwide transport service with optimized routes ensuring fast delivery.</p>
                </div>
              </div>

              <ul className="about-list list-unstyled">
                <li data-aos="fade-up">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-success" />
                  <strong> Safety First:</strong> GPS tracking, panic buttons, emergency kits, and real-time monitoring ensure safe and secure deliveries.
                </li>
                <li data-aos="fade-up" data-aos-delay="50">
                  <FontAwesomeIcon icon={faUserTie} className="text-success" />
                  <strong> Expert Team:</strong> Our drivers are certified professionals, with advanced safety training to handle all types of freight with precision.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <FontAwesomeIcon icon={faTools} className="text-success" />
                  <strong> Custom Solutions:</strong> Tailored transportation services, including last-mile deliveries, international shipping, and specialized vehicle handling.
                </li>
                <li data-aos="fade-up" data-aos-delay="150">
                  <FontAwesomeIcon icon={faLeaf} className="text-success" />
                  <strong> Eco-Friendly:</strong> Sustainable fuel alternatives, green logistics solutions, and energy-efficient practices to minimize environmental impact.
                </li>
              </ul>

              <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact" className="btn btn-primary px-4 py-2 rounded-pill shadow">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="row mt-5">
            <div className="col-md-6" data-aos="fade-right">
              <div className="bg-light p-4 rounded shadow">
                <h4 className="text-primary"><FontAwesomeIcon icon={faLightbulb} className="me-2" />Our Vision</h4>
                <p className="mb-0">
                  To be the foremost choice in the transportation sector by consistently surpassing customer expectations with exceptional service, reliability, and innovation. 
                  We aim to drive the industry forward with technological advancements and sustainability at the core of our operations.
                </p>
                <p className="mb-0">
                  We envision expanding our fleet and services, ensuring that every client receives personalized care and a commitment to excellence in delivery services.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left">
              <div className="bg-light p-4 rounded shadow">
                <h4 className="text-primary"><FontAwesomeIcon icon={faHandshake} className="me-2" />Our Mission</h4>
                <p className="mb-0">
                  To provide unmatched transportation services characterized by safety, comfort, and affordability, with a strong commitment to sustainable practices.
                  We strive to enhance our clients' experience by offering transparent pricing, superior customer service, and state-of-the-art tracking technology.
                </p>
                <p className="mb-0">
                  Our mission is to establish long-term relationships with our clients by continuously improving our services and adapting to the dynamic logistics needs of the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-white border mt-5 p-4 rounded shadow-sm" data-aos="fade-up">
            <h5 className="text-primary"><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Our Commitments</h5>
            <ul>
              <li data-aos="fade-up">
                <FontAwesomeIcon icon={faTruckMoving} className="text-warning me-2" />
                We are committed to providing a modern fleet of vehicles equipped with the latest technology, ensuring optimal service and timely deliveries for all of our clients.
              </li>
              <li data-aos="fade-up" data-aos-delay="50">
                <FontAwesomeIcon icon={faShieldAlt} className="text-info me-2" />
                Safety is our priority. Our fleet is fitted with GPS tracking, emergency kits, and real-time monitoring, ensuring the highest safety standards for your goods.
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <FontAwesomeIcon icon={faLeaf} className="text-success me-2" />
                We’re dedicated to sustainability. Our company integrates fuel-efficient practices and green logistics solutions to reduce environmental impact while maintaining performance.
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <FontAwesomeIcon icon={faHandshake} className="text-primary me-2" />
                We value long-term relationships. Our commitment to customer satisfaction is backed by a promise of reliability, transparency, and customer-first service at all times.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
