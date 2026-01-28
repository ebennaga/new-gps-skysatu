"use client";

import { MapContainer, TileLayer } from "react-leaflet";

export default function MapView() {
  return (
    <MapContainer
      center={[-2, 118]}
      zoom={5}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
