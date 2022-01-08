import React from "react";

import { useSelector } from "react-redux";
import { Text, View, StyleSheet, Button } from "react-native";
import { MealList } from "../components/MealList";
import { useDispatch } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";

import { REST_FILTER } from "../redux/mealSlice";
const CategoryMealScreen = (props) => {
  // const categoryId = props.navigation.getParam("categoryId");
  const { categoryId } = props.route.params.params;
  const availableMeals = useSelector((state) => state.meals.filterMeals);
  const displayMeal = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          title="rest"
          onPress={() => {
            dispatch(REST_FILTER());
          }}
        />
      ),
    });
  });
  if (availableMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Seelect Filter</Text>
      </View>
    );
  }

  return <MealList listData={displayMeal} navigation={props.navigation} />;
};

//pass dynamic data: beacuse we don't have any access to component props!
CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const catgeoryName = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: catgeoryName.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealScreen;
