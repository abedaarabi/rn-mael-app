import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITE } from "../actions/mealAction";
const inialState = {
  meals: MEALS,
  filterMeals: MEALS,
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

    default:
      return state;
  }
};
