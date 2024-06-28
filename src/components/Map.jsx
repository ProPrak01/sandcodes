import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <LoadScript googleMapsApiKey=". AIzaSyB0zs1nX0J0-gzA0UybHdVF2DLQCtr-K-k">
      <div className="map-page">
        <h2>SpaceTec Map</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
