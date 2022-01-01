import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export const CategoryGridTitle = (props) => {
  let TouchableCom = TouchableOpacity;

  Platform.OS === "android" && Platform.Version >= 21
    ? (TouchableCom = TouchableNativeFeedback)
    : null;
  return (
    <View style={styles.itemGrid}>
      <TouchableCom style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{
            ...styles.itemAppContainer,
            ...{ backgroundColor: props.color },
          }}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCom>
    </View>
  );
};

const styles = StyleSheet.create({
  itemGrid: {
    flex: 1,

    margin: 15,
    height: 120,
  },
  itemAppContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "right",
    color: "black",
  },
});
