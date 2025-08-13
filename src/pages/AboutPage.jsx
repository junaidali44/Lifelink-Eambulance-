import React from 'react';
import { NavLink } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h1 className="display-4 fw-bold mb-4">
                                <span className="text-danger">About </span>
                                <span className="text-primary">LifeLink</span>
                            </h1>
                            <p className="lead mb-4">
                                Connecting lives through compassionate emergency medical services when every second counts.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <NavLink to="/contact" className="btn btn-primary px-4 py-3 rounded-pill fw-bold">
                                    Contact Us
                                </NavLink>
                                <NavLink to="/gallery" className="btn btn-outline-danger px-4 py-3 rounded-pill fw-bold">
                                    View Gallery
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="LifeLink Team"
                                className="about-hero-img img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-5 bg-white">
                <div className="container py-4">
                    <div className="section-heading">
                        <h2>
                            <span className="text-danger">Our </span>
                            <span className="text-primary">Core Values</span>
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="value-card card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="value-icon bg-danger bg-opacity-10 text-danger">
                                        <i className="bi bi-heart-pulse"></i>
                                    </div>
                                    <h3 className="h4 fw-bold mb-3">Patient Care</h3>
                                    <p className="text-muted">
                                        Prioritizing comfort and safety during transport with medically-equipped vehicles.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="value-card card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="value-icon bg-primary bg-opacity-10 text-primary">
                                        <i className="bi bi-speedometer2"></i>
                                    </div>
                                    <h3 className="h4 fw-bold mb-3">Rapid Response</h3>
                                    <p className="text-muted">
                                        Average response time under 15 minutes in urban areas with GPS-tracked units.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="value-card card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="value-icon bg-success bg-opacity-10 text-success">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <h3 className="h4 fw-bold mb-3">Trained Staff</h3>
                                    <p className="text-muted">
                                        EMT-certified personnel with continuous training programs for all crew members.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container py-4">
                    <div className="row g-4">
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-number text-danger">1,250+</div>
                                <p className="text-muted mb-0">Lives Saved</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-number text-primary">50+</div>
                                <p className="text-muted mb-0">Ambulances</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-number text-danger">24/7</div>
                                <p className="text-muted mb-0">Availability</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-number text-primary">15+</div>
                                <p className="text-muted mb-0">Cities Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5 bg-light">
                <div className="container py-4">
                    <div className="section-heading">
                        <h2>
                            <span className="text-primary">Meet Our</span>
                            <span className="text-danger"> Medical Team</span>
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="team-card card">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Dr. Sarah Johnson"
                                    className="team-img"
                                />
                                <div className="card-body text-center">
                                    <h4 className="fw-bold mb-1">Dr. Sarah Johnson</h4>
                                    <p className="text-danger mb-0">Medical Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-card card">
                                <img
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                                    alt="Michael Chen"
                                    className="team-img"
                                />
                                <div className="card-body text-center">
                                    <h4 className="fw-bold mb-1">Michael Chen</h4>
                                    <p className="text-danger mb-0">Lead Paramedic</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-card card">
                                <img
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                    alt="Emma Rodriguez"
                                    className="team-img"
                                />
                                <div className="card-body text-center">
                                    <h4 className="fw-bold mb-1">Emma Rodriguez</h4>
                                    <p className="text-danger mb-0">Emergency Nurse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="display-5 fw-bold mb-4">Ready to Partner With Us?</h2>
                            <p className="lead mb-5 opacity-75">
                                Whether you need emergency services or want to join our team, we're here to help
                            </p>
                            <div className="d-flex flex-wrap gap-3 justify-content-center">
                                <NavLink to="/contact" className="btn btn-light px-4 py-3 rounded-pill fw-bold">
                                    Contact Our Team
                                </NavLink>
                                <NavLink to="/conatct " className="btn btn-outline-light px-4 py-3 rounded-pill fw-bold">
                                    Users feedback
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;