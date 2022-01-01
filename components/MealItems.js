import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  View,
  ImageBackground,
} from "react-native";
//style={{ ...props.style, ...styles.screen }}
export const MealItems = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.imgStyle}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    marginTop: 10,
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  imgStyle: { height: "100%", width: "100%", justifyContent: "flex-end" },
  mealRow: {
    flexDirection: "row",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6);",

    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  title: {
    fontFamily: "open-sans-Bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});
