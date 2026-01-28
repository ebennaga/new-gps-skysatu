'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import { VesselPosition } from '@/types/vessel';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

function FlyTo({ pos }: { pos: VesselPosition }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([pos.lat, pos.lng], 10);
  }, [pos, map]);

  return null;
}

export default function MapLeaflet({
  selected,
}: {
  selected: VesselPosition | null;
}) {
  return (
    <MapContainer center={[-2, 118]} zoom={5} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {selected && (
        <>
          <FlyTo pos={selected} />
          <Marker position={[selected.lat, selected.lng]}>
            <Popup autoPan>
              <b>MARINA EXPRESS</b>
              <br />
              Latitude: {selected.lat}
              <br />
              Longitude: {selected.lng}
              <br />
              Speed: {selected.speed} Knots
              <br />
              Heading: {selected.heading}°
            </Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
}
