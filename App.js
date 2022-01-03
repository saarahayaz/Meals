import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";

import RestaurantsScreen from "./src/components/features/restaurant/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />

      <ExpoStatusBar style="auto" />
    </>
  );
}
