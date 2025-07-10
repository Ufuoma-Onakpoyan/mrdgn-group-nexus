import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const coordinates: [number, number] = [6.6341107, 6.2339726]; // [lng, lat]

  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${coordinates[1]},${coordinates[0]}`;
    window.open(googleMapsUrl, '_blank');
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demonstration purposes, we'll show a styled map placeholder
    // In production, you would set mapboxgl.accessToken = 'your-mapbox-token';
    
    // Since we don't have a token, we'll create a custom styled map visualization
    const mapElement = mapContainer.current;
    mapElement.innerHTML = `
      <div class="relative w-full h-full bg-gradient-to-br from-primary/10 to-blue-600/20 rounded-lg overflow-hidden cursor-pointer group">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center group-hover:scale-105 transition-transform duration-300">
            <div class="w-12 h-12 mx-auto mb-3 bg-red-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">MrDGN Group Office</h3>
            <p class="text-sm text-gray-600 mb-2">Click to view in Google Maps</p>
            <p class="text-xs text-gray-500">6.2339726°N, 6.6341107°E</p>
          </div>
        </div>
        <div class="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </div>
      </div>
    `;

    mapElement.addEventListener('click', handleMapClick);

    return () => {
      mapElement.removeEventListener('click', handleMapClick);
    };
  }, []);

  return (
    <div className={`w-full h-96 ${className}`}>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;