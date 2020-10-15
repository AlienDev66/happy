import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateOrphanage from "./pages/CreateOrphanage";
import Landing from "./pages/Landing";
import OrphanageList from "./pages/OrphanageList";
import OrphanageMaps from "./pages/OrphanageMaps";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanageMaps} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={OrphanageList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
