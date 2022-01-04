import React from "react";

import { useSelector } from "react-redux";

import { MealList } from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  // const categoryId = props.navigation.getParam("categoryId");
  const { categoryId } = props.route.params.params;
  const availableMeals = useSelector((state) => state.meals.filterMeals);

  const displayMeal = availableMeals.filter(
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
