import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface Props {
  latitude: number;
  longitude: number;
}

const Map: React.FC<Props> = ({ latitude, longitude }: Props) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      style={{ height: "250px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} />
    </MapContainer>
  );
};

export default Map;
