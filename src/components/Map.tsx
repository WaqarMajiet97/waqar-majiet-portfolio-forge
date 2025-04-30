
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const Map = ({ 
  center = { lat: -34.0476, lng: 18.6168 }, // Default coordinates for Mitchell's Plain
  zoom = 12,
  className = "h-64" 
}: MapProps) => {
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [googleApiKey, setGoogleApiKey] = useState('');
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  
  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
  };

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputToken = googleApiKey.trim();
    if (inputToken) {
      localStorage.setItem('google_maps_api_key', inputToken);
      setShowTokenInput(false);
    }
  };

  // Try to load API key from localStorage on component mount
  React.useEffect(() => {
    const savedToken = localStorage.getItem('google_maps_api_key');
    if (savedToken) {
      setGoogleApiKey(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  if (showTokenInput) {
    return (
      <div className={`bg-white rounded-lg shadow-sm ${className} flex flex-col items-center justify-center p-6`}>
        <div className="max-w-md w-full space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-medium">Google Maps API Key Required</h3>
            <p className="text-sm text-gray-500 mt-1">
              To view the map, please enter your Google Maps API key.
              You can get one at <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Console</a>
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={googleApiKey}
                onChange={(e) => setGoogleApiKey(e.target.value)}
                placeholder="Enter Google Maps API key"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Save and Show Map
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm ${className} relative overflow-hidden`}>
      <LoadScript googleMapsApiKey={googleApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker 
            position={center} 
            onClick={() => setShowInfoWindow(true)}
          >
            {showInfoWindow && (
              <InfoWindow 
                position={center}
                onCloseClick={() => setShowInfoWindow(false)}
              >
                <div>
                  <h3 className="font-medium">Waqar Majiet</h3>
                  <p>Mitchell's Plain, Cape Town</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
