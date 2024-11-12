import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from '../../styles/ContactStyles/Contact.module.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map  () {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Coordinates for Washington, D.C.
        const washingtonLat = 38.8951;
        const washingtonLng = -77.0364;

        const map = L.map(mapRef.current).setView([washingtonLat, washingtonLng], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            maxZoom: 18,
        }).addTo(map);

        L.marker([washingtonLat, washingtonLng]).addTo(map)
            .bindPopup("Washington, D.C.")
            .openPopup();

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className={styles.mapContainer}>
            <div className={styles.map} ref={mapRef}></div>
        </div>
    );
};

export default Map;
