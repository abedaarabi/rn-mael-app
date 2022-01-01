import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen.js";
import CategoryMealsScreen from "../screens/CategoryMealsScreen.js";
import MealDetailScreen from "../screens/MealDetailScreen.js";
import FavoritesScreen from "../screens/FiltersScreen";
import Color from "../constants/Color";
const MealNavigator = createStackNavigator(
  {
    Categorie: {
      screen: CategoriesScreen,
    },

    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: {
      // title: "Centered",
      headerTitleAlign: "center",

      headerStyle: {
        backgroundColor:
          Platform.OS === "ios" ? Color.accentColor : Color.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MealNavigator);
