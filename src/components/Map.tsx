
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
}

const Map = ({ 
  center = [18.4241, -33.9249], // Default coordinates for Cape Town
  zoom = 12,
  className = "h-64" 
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;
    
    mapboxgl.accessToken = token;
    
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center,
      zoom,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'bottom-right'
    );

    // Add a marker at Mitchell's Plain
    new mapboxgl.Marker({ color: 'hsl(var(--primary))' })
      .setLngLat(center)
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Waqar Majiet</h3><p>Mitchell's Plain, Cape Town</p>"))
      .addTo(map.current);
  };

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputToken = mapboxToken.trim();
    if (inputToken) {
      localStorage.setItem('mapbox_token', inputToken);
      setShowTokenInput(false);
      initializeMap(inputToken);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
      initializeMap(savedToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className={`bg-white rounded-lg shadow-sm ${className} flex flex-col items-center justify-center p-6`}>
        <div className="max-w-md w-full space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-medium">Mapbox API Token Required</h3>
            <p className="text-sm text-gray-500 mt-1">
              To view the map, please enter your Mapbox public token.
              You can get one for free at <a href="https://mapbox.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="Enter Mapbox public token"
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
    <div className={`bg-white rounded-lg shadow-sm ${className} relative`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default Map;
