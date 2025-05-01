import React from 'react';
import { Carousel, Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Strengths.css';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './About';
import {
  faCar,
  faUserShield,
  faIndianRupeeSign,
  faSquareParking,
  faConciergeBell,
  faSlidersH,
  faClock,
  faCarSide,
  faShieldAlt,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import image from "../assets/Logo1.jpg"
import { Link } from 'react-router-dom';  // Add this line
import Footer from './Footer';
import Navbar from './Navbar';
import Contact from './Contact';



const All = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <section className="py-5 bg-light" style={{ marginTop: "3.6rem", backgroundSize: "cover" }}>
        <div className="carousel-wrapper">
          <Carousel fade controls indicators>
            <Carousel.Item>
              <img style={{ backgroundSize: "cover" }}
                className="d-block w-100"
                src="https://www.ashwinicab.com/images/16)%20ONLINE%20CAB%20BOOKING.webp"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="hero-title">Premium Transport Solutions</h3>
                <p className="hero-subtitle">Safe • Reliable • Pan India</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/182859572/photo/fleet-of-yellow-new-york-city-taxi-cabs-from-above.jpg?s=612x612&w=0&k=20&c=qmN5s8m3GF1NBg1GUYRhI0qFSjHmifCVvVWLjSpR2VE="
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="hero-title">Efficient Fleet Management</h3>
                <p className="hero-subtitle">Manage your fleet with ease and efficiency.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://t3.ftcdn.net/jpg/00/23/65/62/360_F_23656257_V8Sdz7IkGOyZRfkACOvvoSSNQ3umNr1i.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="hero-title">Real-Time Tracking</h3>
                <p className="hero-subtitle">Track your deliveries in real-time for full transparency.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1731318279714/front-left-side-47.jpg?impolicy=resize&imwidth=360"
              />
              <Carousel.Caption>
                <h3 className="hero-title">On-Time Delivery</h3>
                <p className="hero-subtitle">Your goods delivered safely and on time, every time.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>


      {/* About Preview */}
      <section className="py-5 about-preview-section">
        <Container className="text-center">
          <h2 className="section-title">About <span>Yashashree Translog</span></h2>
          <p className="lead text-muted">
            We are a Pune-based transport leader offering premium vehicle rental and transport services across India.
            Renowned for safety, reliability, and comfort — our fleet and trained team ensure a top-notch experience.
          </p>
          <Link to="/about" className="btn btn-warning mt-3">Learn More</Link>
        </Container>
      </section>

      {/* Our Strengths */}
      <section className="py-5 our-strengths-section">
        <Container>
          <h2 className="section-title text-center mb-4">Our <span>Strengths</span></h2>
          <Row className="text-center g-4">
            <Col md={4}>
              <Card className="p-4 shadow rounded why-card">
                <FontAwesomeIcon icon={faCar} className="text-warning mb-3" size="2x" />
                <h5>Modern Fleet</h5>
                <p>Vehicles under 5 years old for a reliable and safe journey.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow rounded why-card">
                <FontAwesomeIcon icon={faUserShield} className="text-warning mb-3" size="2x" />
                <h5>Trained Staff</h5>
                <p>Professionally trained, courteous and safety-conscious team.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow rounded why-card">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="text-warning mb-3" size="2x" />
                <h5>Competitive Pricing</h5>
                <p>Affordable rates without compromising service quality.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow rounded why-card">
                <FontAwesomeIcon icon={faSquareParking} className="text-warning mb-3" size="2x" />
                <h5>Sufficient Parking Space</h5>
                <p>We provide ample parking space ensuring convenience and accessibility</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow rounded why-card">
                <FontAwesomeIcon icon={faConciergeBell} className="text-warning mb-3" size="2x" />
                <h5>Additional Services</h5>
                <p>24/7 to assist with bookings, inquiries, and emergencies & Wi-Fi connectivity, for comfort</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow rounded why-card">
                <FontAwesomeIcon icon={faSlidersH} className="text-warning mb-3" size="2x" />
                <h5>Customized Transport Solutions</h5>
                <p>Offer transportation solutions for corporate events, etc.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="section-title">Why <span>Choose Us</span></h2>
            <p className="text-muted">We go the extra mile to ensure safe, comfortable, and reliable transport.</p>
          </div>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow rounded h-100 why-card">
                <FontAwesomeIcon icon={faClock} className="text-warning mb-3" size="2x" />
                <h5>24/7 Availability</h5>
                <p>Always on-call for emergencies and convenience anytime you need.</p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow rounded h-100 why-card">
                <FontAwesomeIcon icon={faCarSide} className="text-warning mb-3" size="2x" />
                <h5>Modern Fleet</h5>
                <p>Vehicles less than 5 years old with GPS and luxury amenities.</p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow rounded h-100 why-card">
                <FontAwesomeIcon icon={faShieldAlt} className="text-warning mb-3" size="2x" />
                <h5>Safety First</h5>
                <p>GPS tracking, trained staff, and first-aid kits in every vehicle.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="section-title">What <span>Our Clients</span> Say</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="testimonial-card animate__animated animate__fadeInUp">
                <p>“Yashashree Translog exceeded our expectations. Punctual, professional, and truly reliable!”</p>
                <h6>- Ramesh Kulkarni</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="testimonial-card animate__animated animate__fadeInUp animate__delay-1s">
                <p>“We've been working with them for years. They understand logistics like no one else.”</p>
                <h6>- Sneha Patil</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="testimonial-card animate__animated animate__fadeInUp animate__delay-2s">
                <p>“Transparent, efficient, and super friendly. Highly recommend their services.”</p>
                <h6>- Amit Deshmukh</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-5 bg-white clients-section">
        <Container className="text-center">
          <h2 className="section-title mb-4">Our <span>Clients</span></h2>
          <Row className="justify-content-center g-4">
            {[
              {
                src: "https://videos.files.wordpress.com/8Yb9xeRX/ensono-final_dvd.original.jpg",
                alt: "Client 1",
                delay: "0s"
              },
              {
                src: "https://www.ltimindtree.com/wp-content/uploads/2022/11/LTIMindtree_Stacked_2-1-Blue-BG.png",
                alt: "Client 2",
                delay: "0.2s"
              },
              {
                src: "https://www.pngitem.com/pimgs/m/257-2575014_maverick-png-maverick-logo-png-transparent-png.png",
                alt: "Client 3",
                delay: "0.4s"
              },
              {
                src: "https://www.newshubasia.com/wp-content/uploads/2023/02/Logo-all-original-files.png",
                alt: "Client 4",
                delay: "0.6s"
              }
            ].map((client, idx) => (
              <Col xs={6} md={3} key={idx}>
                <div
                  className={`client-logo animate__animated animate__zoomIn`}
                  style={{ animationDelay: client.delay }}
                >
                  <img src={client.src} className="img-fluid" alt={client.alt} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* FAQ Section */}
      <section className="py-5 faq-section bg-light" data-aos="fade-up">
        <Container>
          <h2 className="section-title text-center mb-4">
            Frequently Asked <span>Questions</span>
          </h2>
          <Accordion defaultActiveKey="0" className="custom-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Do you operate outside Pune?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer pan-India transport solutions with tourist permits and trained drivers.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I book vehicles for corporate events?</Accordion.Header>
              <Accordion.Body>
                Absolutely! We specialize in corporate bookings with flexible fleet sizes and support.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What safety measures do you follow?</Accordion.Header>
              <Accordion.Body>
                All vehicles have GPS, emergency kits, and regular safety audits by trained professionals.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-warning text-dark text-center">
        <Container>
          <h2 className="fw-bold">Looking for safe and reliable transport?</h2>
          <p className="lead mb-4">We're just a call away. 24/7 service. All over India.</p>
          <Link to="/contact" className="btn btn-dark px-4 py-2">
            Contact Us Now
          </Link>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default All;
