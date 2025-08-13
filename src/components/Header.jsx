import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm border-bottom">
      <div className="container px-3 px-lg-4">
        {/* Brand Logo */}
        <NavLink 
          className="navbar-brand fw-bold fs-4 d-flex align-items-center" 
          to="/"
        >
          <i className="fas fa-ambulance me-2 text-primary" />
          <span className="text-dark">Life</span>
          <span className="text-primary">Link</span>
        </NavLink>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0 p-0" 
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: '/', name: 'Home' },
              { path: '/about', name: 'About Us' },
               { path: '/gallery', name: 'Gallery' },
              { path: '/contact', name: 'Contact' },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 mx-1 ${isActive ? 'active text-primary fw-semibold' : 'text-dark'}`
                  }
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            
            {/* Auth Buttons - Visible on all screens */}
            <li className="nav-item d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
              <NavLink 
                to="/login" 
                className="btn btn-outline-primary btn-sm px-3 me-2"
              >
                Login
              </NavLink>
              <NavLink 
                to="/signup" 
                className="btn btn-primary btn-sm px-3"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom CSS in JS for mobile menu animation */}
     
    </header>
  );
};

export default Header;