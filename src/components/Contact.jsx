import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faComment, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Navbar from './Navbar';
import './Contact.css';
import contact from '../assets/contact.webp'; // Ensure this image exists

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Invalid email';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setIsFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* Hero Section */}
        <section
          className="contact-hero d-flex align-items-center justify-content-center text-white text-center"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            position: 'relative'
          }}
        >
          <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
          <div className="container position-relative z-1">
            <h1 className="display-4 fw-bold mb-3">
              <FontAwesomeIcon icon={faHandshake} className="me-2 text-warning" />
              Get In Touch
            </h1>
            <p className="lead">We’re always happy to hear from you. Let’s connect and grow together.</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 bg-white p-5 shadow rounded">
                <h2 className="text-center mb-4 text-primary">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faUser} className="me-2 text-primary" /> Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" /> Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faComment} className="me-2 text-primary" /> Message
                    </label>
                    <textarea
                      className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                      rows="5"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    {isFormSubmitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
