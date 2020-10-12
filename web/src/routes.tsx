import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanageMaps from "./pages/OrphanageMaps";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} path="/" exact />
        <Route component={OrphanageMaps} path="/orphanage" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
