import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Map = ({position}: {position: [number, number]}) => {
    useEffect(() => {
        const map = L.map('map').setView(position, 13);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker(position).addTo(map)
          .bindPopup('המיקום המשוער שלך<br>  בהתבסס על כתובת ה-IP שלך')
          .openPopup();
        return () => {
          map.remove();
        };
      }, [position]);
      return (
        <div style={{ width: '100%', height: '65%', zIndex: '0', position: 'relative' }}>
          <div id="map" style={{ width: '100%', height: '100%' }}></div>
        </div>
      );
}

export default Map