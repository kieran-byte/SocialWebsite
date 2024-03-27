// InteractiveMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './InteractiveMap.css'
import icon from 'leaflet/dist/images/marker-icon.png'; 
import iconShadow from 'leaflet/dist/images/marker-shadow.png'; 
import L from 'leaflet';

const blueIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const InteractiveMap = () => {

  return (
    <MapContainer className='leaflet-container' center={[-40.85, 174.7645]} zoom={6} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-36.8, 174.76]} icon={blueIcon}>
    <Popup>
      Vote for trending item one <br/> By Anonymous 
    </Popup>
  </Marker>

  <Marker position={[-43, 172.76]} icon={greenIcon}>
    <Popup>
      Vote for trending item two <br/> By Anonymous 
    </Popup>
  </Marker>

</MapContainer>
  );
};

export default InteractiveMap;
