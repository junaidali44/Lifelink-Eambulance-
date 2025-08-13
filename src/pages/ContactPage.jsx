import React, { useState } from 'react';
import Map from '../components/Map';


const ContactPage = () => {
  // Contact Form State
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Feedback Form State
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "LifeLink saved my father during an emergency. Their response time was incredible!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "The ICU ambulance was fully equipped and the team handled everything perfectly.",
      rating: 4
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      text: "Professional and compassionate service during our family's difficult time.",
      rating: 5
    }
  ];

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setFeedbackData(prev => ({ ...prev, rating }));
  };

  const submitContactForm = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  const submitFeedbackForm = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackData({
        name: '',
        email: '',
        rating: 0,
        comments: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-lg-8 text-center">
              <h1 className="display-5 fw-bold mb-4 contact-hero-title">
                Contact LifeLink
              </h1>
              <p className="lead mb-4 contact-hero-subtitle">
                Reach out to us or share your experience with our services
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Main Content Section - Feedback Form and Testimonials */}
        <section className="contact-main-layout mb-5">
          {/* Testimonials Section - Left Side */}
          <div className="testimonials-section">
            <h2 className="fw-bold mb-4">
              <span className="text-primary">What Our</span> 
              <span className="text-danger"> Users Say</span>
            </h2>
            
            <div className="d-flex flex-column gap-3">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="card contact-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                        <i className="bi bi-person-fill fs-5"></i>
                      </div>
                      <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                    </div>
                    <p className="mb-3 testimonial-content">"{testimonial.text}"</p>
                    <div className="text-warning">
                      {'★'.repeat(testimonial.rating)}
                      {'☆'.repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Form - Right Side */}
          <div className="feedback-section">
            <div className="card contact-card h-100">
              <div className="card-body contact-form-container">
                <h2 className="fw-bold mb-4">
                  <span className="text-primary">Share Your</span> 
                  <span className="text-danger"> Feedback</span>
                </h2>
                
                {feedbackSubmitted ? (
                  <div className="alert alert-success text-center">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you for your feedback! We appreciate your time.
                  </div>
                ) : (
                  <form onSubmit={submitFeedbackForm} className="d-flex flex-column flex-grow-1">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={feedbackData.name}
                        onChange={handleFeedbackChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        value={feedbackData.email}
                        onChange={handleFeedbackChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Service Rating</label>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted small">Poor</span>
                        <div className="d-flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <button
                              type="button"
                              key={star}
                              className={`btn p-0 rating-star ${star <= (hoverRating || feedbackData.rating) ? 'text-warning' : 'text-muted'}`}
                              onClick={() => handleRatingClick(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                        <span className="text-muted small">Excellent</span>
                      </div>
                    </div>
                    <div className="mb-5 flex-grow-0">
                      <label className="form-label fw-semibold">Comments</label>
                      <textarea 
                        className="form-control h-100" 
                        name="comments"
                        value={feedbackData.comments}
                        onChange={handleFeedbackChange}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-danger w-100 py-2 fw-bold mt-3"
                    >
                      <i className="bi bi-star-fill me-2"></i>
                      Submit Feedback
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section - Contact Info and Map */}
        <section className="contact-secondary-layout mb-5">
          {/* Map - Left Side */}
          <div className="map-section">
            <div className="card contact-card h-100">
              <div className="card-body p-0 d-flex flex-column">
                <h5 className="fw-bold p-4 pb-0">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  Our Location on Map
                </h5>
                <div id="leafletMap" className="contact-map-container flex-grow-1">
                    <Map />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info - Right Side */}
          <div className="contact-info-section">
            <div className="card contact-card h-100">
              <div className="card-body contact-form-container">
                <h2 className="fw-bold mb-4" id='form'>
                  <span className="text-primary">Contact</span> 
                  <span className="text-danger"> Our Team</span>
                </h2>
                
                {contactSubmitted ? (
                  <div className="alert alert-success text-center">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you for contacting us! We'll respond within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={submitContactForm} className="d-flex flex-column flex-grow-1" >
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={contactData.name}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        value={contactData.email}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject"
                        value={contactData.subject}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div className="mb-5 flex-grow-1">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea 
                        className="form-control h-100" 
                        name="message"
                        value={contactData.message}
                        onChange={handleContactChange}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100 py-2 fw-bold mt-3"
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Cards */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center">
            <span className="text-primary">Our</span> 
            <span className="text-danger"> Contact Details</span>
          </h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card contact-card h-100">
                <div className="card-body text-center d-flex flex-column">
                  <div className="contact-icon-wrapper bg-primary bg-opacity-10 text-primary">
                    <i className="bi bi-geo-alt-fill fs-3"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Location</h5>
                  <div className="mb-3 flex-grow-1">
                    <p className="mb-1">123 Medical Plaza</p>
                    <p className="mb-0">Healthcare City, HC 12345</p>
                  </div>
                  <a href="#map"  className="btn btn-outline-primary  mt-auto">
                    <i className="bi bi-map me-2"></i>View Map
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card contact-card h-100">
                <div className="card-body text-center d-flex flex-column">
                  <div className="contact-icon-wrapper bg-danger bg-opacity-10 text-danger">
                    <i className="bi bi-telephone-fill fs-3"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Emergency</h5>
                  <div className="mb-3 flex-grow-1">
                    <p className="mb-1">030-1111-1234</p>
                    <p className="mb-0">24/7 Hotline</p>
                  </div>
                  <a href="tel:03011111234" className="btn btn-outline-danger mt-auto">
                    <i className="bi bi-telephone-outbound me-2"></i>Call Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card contact-card h-100">
                <div className="card-body text-center d-flex flex-column">
                  <div className="contact-icon-wrapper bg-success bg-opacity-10 text-success">
                    <i className="bi bi-envelope-fill fs-3"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Email</h5>
                  <div className="mb-3 flex-grow-1">
                    <p className="mb-1">contact@lifelink.com</p>
                    <p className="mb-0">Admin Inquiries</p>
                  </div>
                  <a href="#form" className="btn btn-outline-success mt-auto">
                    <i className="bi bi-envelope me-2"></i>Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;