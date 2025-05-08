
import React from 'react';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const Map = ({ 
  center = { lat: -34.0476, lng: 18.6168 }, // Default coordinates for Mitchell's Plain
  zoom = 15,
  className = "h-64" 
}: MapProps) => {
  // Build the Google Maps embed URL with the correct location
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Mitchell's+Plain,+Cape+Town,+South+Africa&zoom=${zoom}`;
  
  return (
    <div className={`bg-white rounded-lg shadow-sm ${className} relative overflow-hidden`}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.5rem' }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      />
    </div>
  );
};

export default Map;
