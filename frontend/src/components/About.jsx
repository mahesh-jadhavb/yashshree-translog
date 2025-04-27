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
              <img
                src="https://t3.ftcdn.net/jpg/04/09/34/66/360_F_409346621_8d9NAfEHWnNFIVmQxH8yzfNs0f7dHanF.jpg"
                alt="Fleet of trucks ready for transport by Yashashree Translog"
                className="about-img img-fluid rounded shadow"
              />
            </div>

            {/* Content Column */}
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="about-title mb-4">About Yashashree Translog</h2>

              <div className="row g-4 mb-4">
                <div className="col-md-6" data-aos="zoom-in">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faTruckMoving} className="text-primary" size="2x" />
                  </div>
                  <h5 className="text-center">Modern Fleet</h5>
                  <p className="text-muted text-center mb-0">Vehicles under 5 years old</p>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-primary" size="2x" />
                  </div>
                  <h5 className="text-center">Pan India Coverage</h5>
                  <p className="text-muted text-center mb-0">24/7/365 nationwide transport service</p>
                </div>
              </div>

              <ul className="about-list list-unstyled">
                <li data-aos="fade-up">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-success" />
                  <strong> Safety First:</strong> GPS tracking, panic buttons, emergency kits
                </li>
                <li data-aos="fade-up" data-aos-delay="50">
                  <FontAwesomeIcon icon={faUserTie} className="text-success" />
                  <strong> Expert Team:</strong> Professionally trained drivers & support staff
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <FontAwesomeIcon icon={faTools} className="text-success" />
                  <strong> Custom Solutions:</strong> Airport transfers, city tours, corporate travel
                </li>
                <li data-aos="fade-up" data-aos-delay="150">
                  <FontAwesomeIcon icon={faLeaf} className="text-success" />
                  <strong> Eco-Friendly:</strong> Fuel-efficient & sustainable operations
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
                <p className="mb-0">To be the foremost choice in the transportation sector by consistently surpassing customer expectations with exceptional service, reliability, and innovation.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left">
              <div className="bg-light p-4 rounded shadow">
                <h4 className="text-primary"><FontAwesomeIcon icon={faHandshake} className="me-2" />Our Mission</h4>
                <p className="mb-0">To provide unmatched transportation services characterized by safety, comfort, and affordability, with a strong commitment to sustainable practices.</p>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-white border mt-5 p-4 rounded shadow-sm" data-aos="fade-up">
            <h5 className="text-primary">Our Commitments</h5>
            <p className="mb-0">We are dedicated to exceeding client expectations through seamless service, continuous innovation, and a client-first mindset — delivering reliable, hassle-free transportation experiences Pan India.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
