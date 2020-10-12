import React from "react";

import { PageMap, MapMarkerImg } from "./styles";
import mapMarkerImg from "../../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const OrphanageMaps: React.FC = () => {
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
      </Map>

      <Link to="" className="create-orphanage">
        {" "}
        <FiPlus size={32} color="#FFF" />{" "}
      </Link>
    </PageMap>
  );
};

export default OrphanageMaps;
