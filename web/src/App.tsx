import React from "react";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
