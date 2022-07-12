import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { VenueLocationIcon } from './VenueLocationIcon';

function MapView(props) {
  const [currentLocation, setCurrentLocation] = useState(({ lat: 33.5148894, lng: 73.1545146 }))

  const [zoom, setZoom] = useState(9)

  return (
    <div className='card'>
      <div className='d-flex justify-content-between'>

        <div className='ml-3 mt-3'>
          <h3 className='text-center text-muted '>Locations</h3>
        </div>
      </div>
      <MapContainer center={currentLocation} zoom={zoom} style={{ width: "79vw", height: "50vh" }} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={currentLocation} icon={VenueLocationIcon}>
          <Popup>
            Khalid <br /> One hour ago.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}


export default MapView;
