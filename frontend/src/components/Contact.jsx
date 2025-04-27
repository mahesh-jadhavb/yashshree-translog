import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Navbar from './Navbar';
import './Contact.css'; // Ensure you have the updated styles here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Simulate form submission
      setIsFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Here, integrate your backend or email service, like EmailJS or Formspree
      // Example with EmailJS (replace with your credentials)
      try {
        await window.emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          formData,
          'YOUR_USER_ID'
        );
        alert('Your message has been sent!');
      } catch (error) {
        alert('Failed to send message. Please try again later.');
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };

  return (
    <>
      <Navbar />
      <div className="contact-page" style={{ marginTop: '5rem' }}>
        {/* Hero Section */}
        <section className="contact-hero py-5 text-white text-center">
          <div className="container">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead">We'd love to hear from you! Please fill out the form below.</p>
          </div>
        </section>

        {/* Form & Info Section */}
        <section className="py-0">
          <div className="container">
            <div className="row justify-content-center">
              {/* Contact Form */}
              <div className="col-md-8 col-lg-6">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-4">
                    <label className="form-label">Full Name</label>
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
                  <div className="mb-4">
                    <label className="form-label">Email</label>
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
                    <label className="form-label">Message</label>
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
                  <button type="submit" className="btn btn-submit px-4">
                    {isFormSubmitted ? 'Message Sent' : 'Send Message'}
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
