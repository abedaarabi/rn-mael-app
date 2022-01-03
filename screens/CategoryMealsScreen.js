import React from "react";

import { MealItems } from "../components/MealItems";
import { MealList } from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  // const categoryId = props.navigation.getParam("categoryId");
  const { categoryId } = props.route.params.params;

  const displayMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

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

export default CategoryMealScreen;
