import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Example trail data (replace with real API data if available)
const trails = [
  { name: "Swamp Rabbit Trail", coords: [34.8526, -82.3940] },
  { name: "Sulphur Springs Trail", coords: [34.8485, -82.3616] },
  { name: "Brissy Ridge Trail", coords: [34.8482, -82.3671] },
  { name: "Lake Conestee Nature Park Loop", coords: [34.7970, -82.3656] },
];

export default function HikingMap() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter trails based on search input
  const filteredTrails = trails.filter((trail) =>
    trail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Search Bar */}
      <div style={{
        position: "absolute",
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "white",
        padding: "8px 12px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}>
        <input
          type="text"
          placeholder="Search trails…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "250px", padding: "6px" }}
        />
      </div>

      {/* Map */}
      <MapContainer
        center={[34.85, -82.37]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Render trail markers */}
        {filteredTrails.map((trail, idx) => (
          <Marker key={idx} position={trail.coords}>
            <Popup><strong>{trail.name}</strong></Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
