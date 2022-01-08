import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import Color from "../constants/Color";
import { MEALS } from "../data/dummy-data";

import { TOGGLE_FAVORITE } from "../redux/mealSlice";
const inq = (data) => {
  return data.map((item, idx) => {
    return (
      <View style={styles.listItem}>
        <Text key={item}>{item}</Text>
      </View>
    );
  });
};

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params.params;
  const dispatch = useDispatch();

  const availableMeals = useSelector((state) => state.meals.meals);
  const catgeoryName = availableMeals.find((cat) => cat.id === mealId);

  const updatedFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const s = updatedFav ? "blue" : "red";

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            dispatch(TOGGLE_FAVORITE(mealId));
          }}
          title="fv"
          color={s}
        />
      ),
    });
  }, [s]);

  const textColor =
    catgeoryName.complexity === "simple"
      ? { color: "green" }
      : { color: "red" };
  return (
    <ScrollView>
      <Image source={{ uri: catgeoryName.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text>{catgeoryName.duration}m</Text>
        <Text style={textColor}>{catgeoryName.complexity.toUpperCase()}</Text>
        <Text>{catgeoryName.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}> Ingredients</Text>
      {inq(catgeoryName.ingredients)}
      <Text style={styles.title}>steps</Text>
      {inq(catgeoryName.steps)}
    </ScrollView>
  );
};

export const detailOption = (navigationData) => {
  const { mealId } = navigationData.route.params.params;

  const catgeoryName = MEALS.find((cat) => cat.id === mealId);

  return {
    headerTitle: catgeoryName.title,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor:
        Platform.OS === "ios" ? Color.accentColor : Color.primaryColor,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginHorizontal: 20,

    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
