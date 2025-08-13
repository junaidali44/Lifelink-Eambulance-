import React, { useState, useEffect } from 'react';

const GalleryPage = () => {
    const [ambulances, setAmbulances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setAmbulances(data.ambulances);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const ambulanceTypes = [...new Set(
        ambulances.flatMap(amb => [amb.specialization, amb.ac])
    )];

    const filteredAmbulances = filter === 'all'
        ? ambulances
        : ambulances.filter(amb => amb.specialization === filter || amb.ac === filter);


    if (loading) {
        return (
            <div className="container py-5">
                <div className="row g-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card placeholder-glow border-0">
                                <div className="card-img-top placeholder" style={{ height: '200px', borderRadius: '12px' }}></div>
                                <div className="card-body px-0">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-8"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="gallery-page pb-5">
            {/* Hero Section */}
            <div className="gallery-hero py-5 mb-4 bg-light">
                <div className="container text-center py-3">
                    <h1 className="display-5 fw-bold mb-3">
                        <span className="text-primary">LifeLink</span>
                        <span className="text-danger"> Ambulance Gallery</span>
                    </h1>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        Explore our fleet of advanced medical transport vehicles
                    </p>
                </div>
            </div>

            {/* Filter Controls */}
            <div className="container mb-5">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                    <button
                        className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-3`}
                        onClick={() => setFilter('all')}
                    >
                        All Vehicles
                    </button>
                    {ambulanceTypes.map(type => (
                        <button
                            key={type}
                            className={`btn btn-sm ${filter === type ? 'btn-danger' : 'btn-outline-danger'} rounded-pill px-3`}
                            onClick={() => setFilter(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container">
                <div className="row g-4">
                    {filteredAmbulances.length > 0 ? (
                        filteredAmbulances.map(ambulance => (
                            <div key={ambulance.id} className="col-xl-3 col-lg-4 col-md-6">
                                <div
                                    className="gallery-card shadow-sm rounded-3 overflow-hidden position-relative"
                                    onClick={() => setSelectedImage(ambulance)}
                                >
                                    <div className="gallery-img-container ratio ratio-4x3">
                                        <img
                                            src={ambulance.image}
                                            alt={`${ambulance.type} ambulance in ${ambulance.location}`}
                                            className="gallery-img"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="gallery-overlay p-3 shadow-lg">
                                        <h5 className="text-white mb-1">{ambulance.type}</h5>
                                        <p className="text-white-80 small mb-2">{ambulance.vehicle}</p>
                                        <div className="d-flex flex-wrap gap-2">
                                            <span className="badge bg-light text-dark">
                                                <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                                                {ambulance.location}
                                            </span>
                                            <span className="badge bg-primary bg-opacity-35 text-light">
                                                ${ambulance.price}/hr
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <i className="bi bi-emoji-frown display-4 text-muted mb-3"></i>
                            <h4 className="text-muted">No ambulances found matching your filter</h4>
                            <button
                                className="btn btn-outline-primary mt-3"
                                onClick={() => setFilter('all')}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;