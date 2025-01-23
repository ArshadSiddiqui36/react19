import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "./MapComponent.css";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // console.log(mapRef, 'Testing mapRef value...');
    // Initialize the map
    const mapOptions = {
      // center: [51.958, 9.141],
      // zoom: 10,
      center: [20.5937, 78.9629],
      zoom: 4,
    };

    const map = L.map(mapRef.current, mapOptions);

    // Add tile layer
    const layer = new L.TileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );
    map.addLayer(layer);

    // Handle map clicks to add/remove marker and update coordinates
    map.on("click", (event) => {
      const { lat, lng } = event.latlng;

      // Remove the previous marker if it exists
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      // Add new marker
      markerRef.current = L.marker([lat, lng]).addTo(map);

      // Update state with clicked coordinates
      setLatitude(lat.toFixed(6));
      setLongitude(lng.toFixed(6));
    });

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="wrap">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="latitude"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          id="longitude"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </form>
        <div id="map" ref={mapRef}></div>
    </div>
  );
};

export default MapComponent;
