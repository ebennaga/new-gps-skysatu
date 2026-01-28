"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Vessel } from "@/types/vessel";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// FIX marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

function FlyTo({ vessel }: { vessel: Vessel | null }) {
  const map = useMap();

  useEffect(() => {
    // 👇 Check lat & lng tidak null
    if (vessel && vessel.lat !== null && vessel.lng !== null) {
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
  // 👇 Check vessel valid sebelum render
  const hasValidPosition =
    activeVessel && activeVessel.lat !== null && activeVessel.lng !== null;

  return (
    <MapContainer center={[-2, 118]} zoom={5} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FlyTo vessel={activeVessel} />

      {/* 👇 Render marker hanya jika posisi valid */}
      {hasValidPosition && (
        <Marker position={[activeVessel.lat!, activeVessel.lng!]}>
          <Popup>
            <strong>{activeVessel.name}</strong>
            <br />
            Latitude : {activeVessel.lat}
            <br />
            Longitude: {activeVessel.lng}
            <br />
            Speed&nbsp;&nbsp;&nbsp;: {activeVessel.speed ?? "N/A"} knots
            <br />
            Heading : {activeVessel.heading ?? "N/A"}°
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
