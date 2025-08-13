
import React from 'react';
import { NavLink } from 'react-router-dom';

const Mission = () => {
  return (
    <>
       {/* Mission Section */}
            <section className="py-5 bg-light">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">
                            <span className="text-danger">Our</span>
                            <span className="text-primary"> Mission</span>
                        </h2>
                        <div className="mx-auto" style={{ maxWidth: '700px' }}>
                            <p className="text-muted mb-0">
                                To provide rapid, reliable emergency medical transportation with uncompromising care and professionalism.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-3">
                                <div className="card-body text-center p-4">
                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 d-inline-block mb-3">
                                        <i className="bi bi-heart-pulse fs-2"></i>
                                    </div>
                                    <h5 className="fw-bold mb-3">Patient Care</h5>
                                    <p className="text-muted">
                                        Prioritizing comfort and safety during transport with medically-equipped vehicles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-3">
                                <div className="card-body text-center p-4">
                                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-block mb-3">
                                        <i className="bi bi-speedometer2 fs-2"></i>
                                    </div>
                                    <h5 className="fw-bold mb-3">Rapid Response</h5>
                                    <p className="text-muted">
                                        Average response time under 15 minutes in urban areas with GPS-tracked units.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-3">
                                <div className="card-body text-center p-4">
                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 d-inline-block mb-3">
                                        <i className="bi bi-people fs-2"></i>
                                    </div>
                                    <h5 className="fw-bold mb-3">Trained Staff</h5>
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
            <section className="py-5 bg-white">
                <div className="container py-4">
                    <div className="row g-4 text-center">
                        <div className="col-md-3">
                            <div className="p-3">
                                <h2 className="text-danger fw-bold">1,250+</h2>
                                <p className="text-muted mb-0">Lives Saved</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">
                                <h2 className="text-primary fw-bold">50+</h2>
                                <p className="text-muted mb-0">Ambulances</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">
                                <h2 className="text-danger fw-bold">24/7</h2>
                                <p className="text-muted mb-0">Availability</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">
                                <h2 className="text-primary fw-bold">15+</h2>
                                <p className="text-muted mb-0">Cities Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    </>
  )
}

export default Mission
