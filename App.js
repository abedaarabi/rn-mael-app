import React from "react";

import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { DrawerNavigator } from "./navigation/MealNavigator";
import { enableFreeze } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
//improve performance
enableFreeze(true);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  // return <MealNavigator />;

  return <DrawerNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
