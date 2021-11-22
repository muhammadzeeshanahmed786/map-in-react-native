import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
// import CurrentLocation from "./map";
import MapLocation from './locationMap'
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MapLocation />
    </View>
  );
}

