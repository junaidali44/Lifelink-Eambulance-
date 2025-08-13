import React, { useState, useEffect, useMemo } from 'react';
import AmbulanceCard from '../components/AmbulanceCard';

const Gallery = () => {
    const [allAmbulances, setAllAmbulances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for filters and sorting
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
            
        </>
    );
};

export default Gallery;