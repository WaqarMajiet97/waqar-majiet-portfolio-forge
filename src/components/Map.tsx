
import React from 'react';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const Map = ({ 
  center = { lat: -33.9249, lng: 18.4241 }, // Default coordinates for Cape Town
  zoom = 13,
  className = "h-64" 
}: MapProps) => {
  // Use Google Maps embed without API key - more secure approach
  // This shows Cape Town, South Africa area
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.99849917169!2d18.404200799999998!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f35989c5b35%3A0xe85d630c1fa4e8a0!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1638360000000!5m2!1sen!2s`;
  
  return (
    <div className={`bg-white rounded-lg shadow-sm ${className} relative overflow-hidden`}>
      <iframe
        title="Google Map - Cape Town, South Africa"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.5rem' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
      />
    </div>
  );
};

export default Map;
