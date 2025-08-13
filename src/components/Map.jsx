import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from '../utils/leafletFix'; // Uses the fixed icons

export default function Map() {
  // Default coordinates (New York)
  const position = [40.7128, -74.0060];

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '10px' }}>
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
      >
        {/* Free OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={position}>
          <Popup>
            <b>Our Location</b><br />
            123 Main St, New York
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}