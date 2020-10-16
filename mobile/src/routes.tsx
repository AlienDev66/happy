import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrphanageMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OphanageMap" component={OrphanageMap} />
        <Screen name="orphanageDetails" component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
