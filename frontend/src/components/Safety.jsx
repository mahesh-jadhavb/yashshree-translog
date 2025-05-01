import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMapMarkerAlt, faUserShield, faTools } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import './Safety.css';  // Ensure you have this import for the custom styles

const Safety = () => {
  return (
    <>
      <Navbar />
      <div className="safety-page">

        {/* Hero Section */}
        <section className="safety-hero py-5 text-center text-white" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511300961261-99460f044f56')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "5rem",
        }}>
          <div className="container">
            <h1 className="display-4">Our Safety Commitment</h1>
            <p className="lead">Safety is our top priority — for our drivers, your cargo, and the environment.</p>
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
