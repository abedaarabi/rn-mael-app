import { MEALS } from "../../data/dummy-data";

import {
  TOGGLE_FAVORITE,
  FILTERED_MEALS,
  REST_FILTER,
} from "../actions/mealAction";
const inialState = {
  meals: MEALS,
  filterMeals: [],
  favoriteMeals: [],
};

export const mealsReducer = (state = inialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const isIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (isIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(isIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavMeals,
        };
      } else {
        const addedMeal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(addedMeal),
        };
      }

    case FILTERED_MEALS:
      const applyFilter = action.filter;
      const updateFilterMeals = state.meals.filter((meal) => {
        if (applyFilter.gultenFree && meal.isGlutenFree) {
          return true;
        }
        if (applyFilter.lactoseFree && meal.isLactoseFree) {
          return true;
        }
        if (applyFilter.vegan && meal.isVegan) {
          return true;
        }
        if (applyFilter.vegetarian && meal.isVegetarian) {
          return true;
        }
      });
      return { ...state, filterMeals: updateFilterMeals };
    case REST_FILTER:
      return { ...state, filterMeals: state.meals };
    default:
      return state;
  }
};
