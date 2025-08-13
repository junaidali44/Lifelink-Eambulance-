import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container bg-dark text-white pt-5 pb-4 mt-auto">
            <div className="row">
                {/* Column 1 - About */}
                <div className="col-lg-4 mb-4">
                    <h5 className="text-uppercase fw-bold mb-4 " style={{ letterSpacing: '1px' }}>
                        <span className="text-danger">Life</span><span className="text-primary">Link</span>
                    </h5>
                    <p className="text-light">
                        Connecting lives through compassion and care. Our mission is to make a meaningful difference in communities worldwide.
                    </p>
                    <div className="mt-4">
                        <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
                        <a href="#" className="text-white me-3"><i className="bi bi-twitter-x fs-5"></i></a>
                        <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
                    </div>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">Quick Links</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2"><Link to="/" className="text-white text-decoration-none hover-primary">Home</Link></li>
                        <li className="mb-2"><Link to="/about" className="text-white text-decoration-none hover-primary">About Us</Link></li>
                        <li className="mb-2"><Link to="/gallery" className="text-white text-decoration-none hover-primary">Gallery</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none hover-primary">Contact</Link></li>
                        <li><Link to="/privacy" className="text-white text-decoration-none hover-primary">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Column 3 - Contact Info */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
                    <ul className="list-unstyled text-muted">
                        <li className="mb-3 d-flex">
                            <i className="bi bi-geo-alt-fill text-primary me-3"></i>
                            <span className='text-light'>123 Charity Ave, Compassion City, CC 10001</span>
                        </li>
                        <li className="mb-3 d-flex">
                            <i className="bi bi-telephone-fill text-primary me-3"></i>
                            <span className='text-light'>+1 (555) 123-4567</span>
                        </li>
                        <li className="d-flex">
                            <i className="bi bi-envelope-fill text-primary me-3"></i>
                            <span className='text-light'>info@lifelink.org</span>
                        </li>
                    </ul>
                </div>

                {/* Column 4 - Newsletter */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">Newsletter</h5>
                    <p className="text-light">Subscribe to receive updates on our initiatives.</p>
                    <div className="input-group mb-3">
                        <input 
                            type="email" 
                            className="form-control bg-secondary border-0 text-white" 
                            placeholder="Your Email" 
                            aria-label="Your Email"
                        />
                        <button className="btn btn-primary" type="button">
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-4 mt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="mb-0 text-light">
                    &copy; {new Date().getFullYear()} LifeLink. All rights reserved. | 
                    <Link to="/privacy" className="text-muted ms-2 text-decoration-none hover-primary">Privacy Policy</Link> | 
                    <Link to="/terms" className="text-muted ms-2 text-decoration-none hover-primary">Terms of Service</Link>
                </p>
            </div>
        </div>
    </footer>
);
};

export default Footer;