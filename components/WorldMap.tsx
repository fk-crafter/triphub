import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Destination } from "@/types";

const customMarkerIcon = new L.DivIcon({
  html: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 9 17.02 12 22C15 17.02 19 13.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#FF0000"/>
    </svg>
  `,
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const WorldMap = ({ destinations }: { destinations: Destination[] }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {destinations.map((destination) => (
        <Marker
          key={destination.name}
          position={destination.coordinates!}
          icon={customMarkerIcon}
        >
          <Popup>
            <h3>{destination.name}</h3>
            <p>Starting at {destination.prices.flight}€</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
