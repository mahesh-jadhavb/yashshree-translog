import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCarSide,
  faMapMarkerAlt,
  faClock,
  faCogs,
  faWifi,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Navbar from './Navbar';
import './Services.css';

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
        <section className="services-hero text-center bg-light" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601987077689-cde0524fc35d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
          padding: "40px 0"
        }}>
          <div className="container">
            <h1 className="display-4 fw-bold text-shadow">Our Services</h1>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {services.map((service, i) => (
                <div className="col-md-6 col-lg-4" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="service-card p-4 shadow-sm rounded text-center h-100 bg-white">
                    <div className="icon-circle mb-3 mx-auto">
                      <FontAwesomeIcon icon={service.icon} className="icon" />
                    </div>
                    <h5 className="fw-semibold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Service;
