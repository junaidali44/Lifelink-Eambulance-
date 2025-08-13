import React from 'react';
import { NavLink } from 'react-router-dom';
const Cta = () => {
    return (
        <>
         {/* Team Section */}
            <section className="py-5 bg-light">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">
                            <span className="text-danger">Meet Our</span>
                            <span className="text-primary"> Leadership</span>
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                            Experienced professionals dedicated to emergency medical excellence
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    className="card-img-top object-fit-cover"
                                    style={{ height: '250px' }}
                                    alt="Medical Director"
                                />
                                <div className="card-body text-center">
                                    <h5 className="fw-bold mb-1">Dr. Sarah Johnson</h5>
                                    <p className="text-danger small mb-3">Medical Director</p>
                                    <p className="text-muted small">
                                        Board-certified emergency physician with 15+ years experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                    className="card-img-top object-fit-cover"
                                    style={{ height: '250px' }}
                                    alt="Operations Manager"
                                />
                                <div className="card-body text-center">
                                    <h5 className="fw-bold mb-1">Michael Chen</h5>
                                    <p className="text-primary small mb-3">Operations Manager</p>
                                    <p className="text-muted small">
                                        Logistics expert with military EMS background
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                    className="card-img-top object-fit-cover"
                                    style={{ height: '250px' }}
                                    alt="Training Coordinator"
                                />
                                <div className="card-body text-center">
                                    <h5 className="fw-bold mb-1">Priya Patel</h5>
                                    <p className="text-danger small mb-3">Training Coordinator</p>
                                    <p className="text-muted small">
                                        Former ICU nurse specializing in emergency procedures
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-primary bg-opacity-10">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="fw-bold mb-4">
                                <span className="text-danger" >Ready to</span>
                                <span className="text-primary"> Partner With Us?</span>
                            </h2>
                            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                                Whether you need emergency transport or want to join our team, we're here to help.
                            </p>
                            <div className="d-flex gap-3 justify-content-center">
                                <NavLink style={{  transition: '0.3s',}}
                                    to="/contact"
                                    className="btn btn-primary px-4 py-2 rounded-pill"
                                >
                                    Get in Touch
                                </NavLink>
                                <NavLink style={{  transition: '0.5s',}}
                                    to="/contact"
                                    className="btn btn-outline-danger px-4 py-2 rounded-pill"
                                >
                                 User Feedback
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
