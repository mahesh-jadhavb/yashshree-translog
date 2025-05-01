import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMapMarkerAlt, faUserShield, faTools } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import './Safety.css';  // Ensure you have this import for the custom styles
import SafetyImage from '../assets/SafetyImage.jpg';

const Safety = () => {
  return (
    <>
      <Navbar />
      <div className="safety-page">
        {/* Hero Section with Image, Heading, and Paragraph */}
        <section className="services-hero text-center py-5" style={{ backgroundColor: "#f8f9fa", marginTop: "5rem" }}>
  <div className="container">
    <div className="row align-items-center justify-content-center g-5">

      {/* Image Column */}
      <div className="col-lg-6" data-aos="fade-right">
        <img
          src={SafetyImage}
          alt="Safety Commitment"
          className="img-fluid rounded shadow"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.4s ease",
          }}
        />
      </div>

      {/* Text Column */}
      <div className="col-lg-6 text-start" data-aos="fade-left">
        <h2 className="mb-4" style={{ fontSize: '3rem', color: "#0d6efd", fontWeight: 'bold' }}>
          Our Safety Commitment
        </h2>
        <p className="lead" style={{ fontSize: '1.2rem' }}>
          Safety is our top priority — for our drivers, your cargo, and the environment.
          Our advanced fleet, real-time monitoring systems, and regular training ensure 
          your shipments are in the safest hands.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* Safety Features */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-4">

              {/* Safety Feature 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="safety-card text-center p-4 shadow rounded bg-white h-100">
                  <FontAwesomeIcon icon={faShieldAlt} size="2x" className="icon text-white mb-3" />
                  <h5>Secure Transport</h5>
                  <p>All vehicles are equipped with GPS tracking and real-time monitoring tools.</p>
                </div>
              </div>

              {/* Safety Feature 2 */}
              <div className="col-md-6 col-lg-3">
                <div className="safety-card text-center p-4 shadow rounded bg-white h-100">
                  <FontAwesomeIcon icon={faUserShield} size="2x" className="icon text-white mb-3" />
                  <h5>Trained Staff</h5>
                  <p>Our drivers undergo regular safety training and assessments to stay sharp.</p>
                </div>
              </div>

              {/* Safety Feature 3 */}
              <div className="col-md-6 col-lg-3">
                <div className="safety-card text-center p-4 shadow rounded bg-white h-100">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon text-white mb-3" />
                  <h5>Route Optimization</h5>
                  <p>Advanced software ensures the safest and most efficient delivery paths.</p>
                </div>
              </div>

              {/* Safety Feature 4 */}
              <div className="col-md-6 col-lg-3">
                <div className="safety-card text-center p-4 shadow rounded bg-white h-100">
                  <FontAwesomeIcon icon={faTools} size="2x" className="icon text-white mb-3" />
                  <h5>Vehicle Maintenance</h5>
                  <p>Our fleet is regularly maintained and inspected for peak performance and safety.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Safety;
