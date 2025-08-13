import React from 'react';

const AmbulanceCard = ({ ambulance }) => {
    const { type, vehicle, location, ac, specialization, price, image } = ambulance;

    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
            <div className="card ambulance-card w-100 h-80"  style={{ overflow: 'hidden' }}>
                <img src={image} className="card-img-top" alt={type} width={'100%'} height={'40%'}/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{type}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{vehicle}</h6>
                    <p className="card-text text-secondary fw-bold">{location}</p>
                    <div className="mb-3">
                        <span className="badge bg-primary me-1">{ac}</span>
                        <span className="badge bg-info text-dark">{specialization}</span>
                    </div>
                    <p className="price-tag mt-auto ms-auto">${price}/hr</p>
                </div>
            </div>
        </div>
    );
};

export default AmbulanceCard;