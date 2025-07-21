import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCarSide,
  faMapMarkerAlt,
  faClock,
  faCogs,
  faWifi,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Navbar from './Navbar';
import './Services.css';
import serviceImage from '../assets/ServiceImage.avif'; // ensure the path is correct

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: faCarSide,
      title: 'Modern Fleet',
      desc: 'Fleet of latest models under 5 years old, ensuring comfort and safety.',
    },
    {
      icon: faMapMarkerAlt,
      title: 'Tourist Permit Vehicles',
      desc: 'Vehicles with tourist permits to operate across Pune and Pan India.',
    },
    {
      icon: faClock,
      title: '24/7/365 Service',
      desc: 'Always available, including weekends and holidays, anytime you need us.',
    },
    {
      icon: faCogs,
      title: 'Customized Solutions',
      desc: 'Tailored transport for corporates, airports, city tours, or long distances.',
    },
    {
      icon: faWifi,
      title: 'On-Demand Add-ons',
      desc: 'Options like Wi-Fi, entertainment systems, and refreshments available.',
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      desc: 'Dedicated customer service team for bookings, emergencies, and inquiries.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="service-page" style={{ marginTop: "4.2rem" }}>

        {/* Hero Section */}
        <section className="services-hero text-center py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 service-image" data-aos="fade-right">
                <img
                  src={serviceImage}
                  alt="Services"
                  className="services img-fluid rounded shadow"
                />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="service-title mb-4" style={{ fontSize: '2.5rem', color: "#0d6efd" }}>
                  Our Services
                </h2>
                <p className="lead">
                  Explore a variety of services that cater to all your transportation needs.
                  Whether it's a quick trip or a long haul, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {services.map((service, i) => (
                <div className="col-md-6 col-lg-4" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="service-card p-4 shadow-lg rounded text-center h-100 bg-white service-card-hover">
                    <div
                      className="icon-circle mb-3 mx-auto"
                      style={{
                        background: "linear-gradient(135deg, #6e7dff, #56e2c6)",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesomeIcon icon={service.icon} style={{ fontSize: "30px", color: "#fff" }} />
                    </div>
                    <h5 className="fw-semibold mt-3">{service.title}</h5>
                    <p className="text-muted mt-2">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="cta-section text-center py-5"
          style={{
            background: "linear-gradient(to right, #6e7dff, #56e2c6)",
            color: "white",
          }}
        >
          <div className="container">
            <h2 className="display-5 fw-bold">Get Started with Our Services Today!</h2>
            <p className="lead mt-3">
              Take your business or journey to the next level with our expert solutions.
              Let's work together to build your success!
            </p>
            <Link to="/contact" className="btn btn-light btn-lg mt-4">Contact Us</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Service;
