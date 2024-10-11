import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AOS from "aos";
import "aos/dist/aos.css";
// Fix for the default marker icon not showing up properly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = ({ latitude, longitude, phase }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div
      className="h-full w-full bg-brand p-5 overflow-hidden relative"
      data-aos="fade-up"
    >
      {/* MapContainer */}
      <div className="h-[80vh] w-full relative z-10">
        {" "}
        {/* Ensure map has higher z-index */}
        <MapContainer
          center={[latitude, longitude]} // Correctly pass latitude and longitude as an array
          zoom={10}
          scrollWheelZoom={true} // Enable interactive zoom
          className="h-full w-full rounded-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              Phase {phase} <br /> Islamabad.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
