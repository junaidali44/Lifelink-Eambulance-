import React, { useState, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import AmbulanceCard from '../components/AmbulanceCard';
import AboutUs from '../components/AboutUs';
import Cta from '../components/Cta';
const HomePage = () => {
  const [allAmbulances, setAllAmbulances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setAllAmbulances(data.ambulances);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredAndSortedAmbulances = useMemo(() => {
    let processed = [...allAmbulances];

    // Filter by search term (location)
    if (searchTerm) {
      processed = processed.filter(a => a.location.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Filter by type
    if (filterType !== 'all') {
      processed = processed.filter(a => a.ac === filterType || a.specialization === filterType);
    }

    // Sort by price
    if (sortOrder === 'asc') {
      processed.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      processed.sort((a, b) => b.price - a.price);
    }

    return processed;
  }, [allAmbulances, searchTerm, filterType, sortOrder]);

  if (loading) return <div className="container text-center py-5"><h4>Loading...</h4></div>;
  if (error) return <div className="container text-center py-5"><h4 className="text-danger">Error: {error}</h4></div>;

  return (
    <>
      <div className="banner"
        style={{
  backgroundImage: "url('https://media.istockphoto.com/id/1484825206/photo/the-ambulance-toy-wooden-block-and-alarm-clock-on-blue-background-emergency-healthcare.jpg?s=612x612&w=0&k=20&c=j_TWJGTGjCx2F1jjQBilWUTlaUnk39GQ-h3pJTYROBM=')",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}>
        <div className="banner-background"></div>


        <div className="banner-decorations">
          <div className="banner-circle banner-circle-primary"></div>
          <div className="banner-circle banner-circle-danger"></div>
        </div>

        <div className="banner-content">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="banner-title">
                LifeLink eAmbulance
              </h1>

              <p className="banner-subtitle">
                Immediate emergency medical transport when every second counts
              </p>

              <div className="banner-buttons">
                <button className="btn btn-primary banner-button banner-button-primary">
                  <i className="bi bi-search-heart me-2"></i>
                  <NavLink to="/gallery" className={'text-decoration-none text-light'}>
                    Find Ambulance
                  </NavLink>
                </button>

                <NavLink to="/contact" className={'btn btn-outline-danger banner-button banner-button-secondary'}>
                  <i className="bi bi-telephone-plus me-2"></i>
                  Emergency Call</NavLink>

              </div>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className="banner-stats">
          <div className="container">
            <div className="row g-3 text-center">
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-icon stat-icon-danger">
                    <i className="bi bi-lightning-charge-fill fs-5"></i>
                  </div>
                  <div className="stat-text">
                    <h5 className="stat-value">24/7</h5>
                    <small className="stat-label">Availability</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-icon stat-icon-primary">
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div className="stat-text">
                    <h5 className="stat-value">50+</h5>
                    <small className="stat-label">Locations</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-icon stat-icon-success">
                    <i className="bi bi-check-circle-fill fs-5"></i>
                  </div>
                  <div className="stat-text">
                    <h5 className="stat-value">1,000+</h5>
                    <small className="stat-label">Lives Saved</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      {/* Key Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            <span className="text-primary">Why Choose</span>
            <span className="text-danger"> LifeLink?</span>
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3 text-danger fs-1">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h3>Rapid Response</h3>
                <p>Our average response time is under 8 minutes in urban areas, ensuring help arrives when you need it most.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3 text-primary fs-1">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <h3>Expert Paramedics</h3>
                <p>Highly trained medical professionals equipped to handle all types of emergencies with advanced life support.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3 text-success fs-1">
                  <i className="bi bi-ambulance"></i>
                </div>
                <h3>Modern Fleet</h3>
                <p>State-of-the-art ambulances equipped with the latest medical technology and equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            <span className="text-primary">Our</span>
            <span className="text-danger"> Services</span>
          </h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  className="card-img-top"
                  alt="Emergency Ambulance"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Emergency Ambulance</h5>
                  <p className="card-text">24/7 emergency response with advanced life support for critical situations.</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                   <NavLink to="/contact" className="btn btn-sm btn-outline-danger">
Contact Us                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  className="card-img-top"
                  alt="Patient Transport"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Patient Transport</h5>
                  <p className="card-text">Safe and comfortable non-emergency transportation for medical appointments.</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <NavLink to="/contact" className="btn btn-sm btn-outline-danger">
                    Contact Us                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  className="card-img-top"
                  alt="Event Medical Cover"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Event Medical Cover</h5>
                  <p className="card-text">Professional medical teams and ambulances for events and public gatherings.</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                   <NavLink to="/contact" className="btn btn-sm btn-outline-danger">
Contact Us                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}


      <div className="container section">
        <div className="text-center mb-4 position-relative my-5">
          <h2 className="display-5 fw-bold d-inline-block px-3" style={{
            backgroundColor: 'white',
            position: 'relative',
            zIndex: 1
          }}>
            Find LifeLink Ambulance
          </h2>
          <div className="position-absolute top-50 start-0 end-0 border-top" style={{ zIndex: 0 }}></div>
        </div>
        <div className="card p-4 mb-5 shadow-sm">
          <div className="row g-3">
            <div className="col-lg-6"><input type="text" className="form-control" placeholder="Search by city..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /></div>
            <div className="col-lg-3 col-md-6"><select className="form-select" value={filterType} onChange={e => setFilterType(e.target.value)}><option value="all">Filter by Type</option><option value="A/C">A/C</option><option value="Non-A/C">Non-A/C</option><option value="ICU">ICU</option><option value="ICCU">ICCU</option></select></div>
            <div className="col-lg-3 col-md-6"><select className="form-select" value={sortOrder} onChange={e => setSortOrder(e.target.value)}><option value="default">Sort by Price</option><option value="asc">Price: Low to High</option><option value="desc">Price: High to Low</option></select></div>
          </div>
        </div>

        <div className="row">
          {filteredAndSortedAmbulances.length > 0 ? (
            filteredAndSortedAmbulances.map(ambulance => <AmbulanceCard key={ambulance.id} ambulance={ambulance} />)
          ) : (
            <div className="col text-center"><p className="fs-5 text-muted">No ambulances match your criteria.</p></div>
          )}
        </div>
      </div>

      <Cta />
    </>
  );
};

export default HomePage;
