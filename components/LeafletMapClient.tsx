'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Vessel } from '@/data/vessel';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// FIX marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

function FlyTo({ vessel }: { vessel: Vessel | null }) {
  const map = useMap();

  useEffect(() => {
    if (vessel) {
      map.flyTo([vessel.lat, vessel.lng], 6, { duration: 1.5 });
    }
  }, [vessel, map]);

  return null;
}

export default function LeafletMapClient({
  activeVessel,
}: {
  activeVessel: Vessel | null;
}) {
  return (
    <MapContainer center={[-2, 118]} zoom={5} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FlyTo vessel={activeVessel} />

      {activeVessel && (
        <Marker position={[activeVessel.lat, activeVessel.lng]}>
          <Popup>
            <strong>{activeVessel.name}</strong>
            <br />
            Latitude : {activeVessel.lat}
            <br />
            Longitude: {activeVessel.lng}
            <br />
            Speed&nbsp;&nbsp;&nbsp;: {activeVessel.speed} knots
            <br />
            Heading : {activeVessel.heading}°
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
