import React, { useEffect, useState } from "react";

import { PageMap, MapMarkerImg } from "./styles";
import mapMarkerImg from "../../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import api from "../../services/api";

interface OrphanagesFields {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

const OrphanageMaps: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanagesFields[]>([]);
  console.log(orphanages);
  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <PageMap>
      <aside>
        <header>
          <MapMarkerImg src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no maap</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Luanda</strong>
          <span>Cazenga</span>
        </footer>
      </aside>

      <Map
        center={[-8.8084355, 13.2945218]}
        zoom={14}
        style={{ width: "100%", height: "100%" }}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`}
        />

        {orphanages.map((orphanage: OrphanagesFields) => (
          <Marker
            key={orphanage.id}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={mapIcon}>
            <Popup
              closeButton={false}
              minHeight={240}
              minWidth={240}
              className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        {" "}
        <FiPlus size={32} color="#FFF" />{" "}
      </Link>
    </PageMap>
  );
};

export default OrphanageMaps;
