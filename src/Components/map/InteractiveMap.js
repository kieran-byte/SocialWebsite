// InteractiveMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './InteractiveMap.css'

const InteractiveMap = () => {

  return (
    <MapContainer className='leaflet-container' center={[-36.85, 174.7645]} zoom={11} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-36.8, 174.76]}>
    <Popup>
      Vote for trending item one <br/> By Anonymous 
    </Popup>
  </Marker>
</MapContainer>
  );
};

export default InteractiveMap;
