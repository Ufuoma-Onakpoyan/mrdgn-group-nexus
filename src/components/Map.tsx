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
    
    // Since we don't have a token, we'll create a custom styled map visualization with Google Maps integration
    const mapElement = mapContainer.current;
    mapElement.innerHTML = `
      <div class="relative w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden cursor-pointer group shadow-xl border">
        <!-- Google Maps Styled Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray-50 to-green-50"></div>
        
        <!-- Grid Pattern for Map Feel -->
        <div class="absolute inset-0 opacity-20">
          <div class="grid grid-cols-12 grid-rows-8 h-full w-full">
            ${Array.from({ length: 96 }).map((_, i) => `<div class="border border-gray-300/30"></div>`).join('')}
          </div>
        </div>
        
        <!-- Roads/Streets Pattern -->
        <div class="absolute inset-0">
          <div class="absolute top-1/3 left-0 right-0 h-1 bg-gray-400/40"></div>
          <div class="absolute top-2/3 left-0 right-0 h-1 bg-gray-400/40"></div>
          <div class="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-400/40"></div>
          <div class="absolute left-3/4 top-0 bottom-0 w-1 bg-gray-400/40"></div>
        </div>
        
        <!-- Map Pin and Label -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative">
            <!-- Pin Drop Animation -->
            <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-12 h-16 group-hover:animate-bounce">
              <div class="w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-1">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="w-1 h-4 bg-red-500 mx-auto"></div>
            </div>
            
            <!-- Location Card -->
            <div class="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg text-center group-hover:scale-105 transition-all duration-300 border min-w-64">
              <h3 class="font-bold text-gray-900 mb-1 text-lg">MR DGN Construction & Developers Ltd</h3>
              <p class="text-sm text-blue-600 mb-2 font-medium">📍 Click to view in Google Maps</p>
              <p class="text-xs text-gray-500 mb-1">6.2339726°N, 6.6341107°E</p>
              <div class="flex items-center justify-center space-x-2 text-xs text-gray-600">
                <span>🏢 Corporate Headquarters</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Google Maps Logo -->
        <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs text-gray-600 font-medium">
          📍 Google Maps
        </div>
        
        <!-- External Link Icon -->
        <div class="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-sm rounded-full p-2 group-hover:bg-blue-600 transition-colors">
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