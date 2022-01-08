import { createSlice } from "@reduxjs/toolkit";

import { MEALS } from "../data/dummy-data";

const initialState = {
  meals: MEALS,
  filterMeals: [],
  favoriteMeals: [],
};

export const mealSlice = createSlice({
  name: "abed",
  initialState,
  reducers: {
    TOGGLE_FAVORITE: (state, action) => {
      console.log(action.payload);
      try {
        const isIndex = state.favoriteMeals.findIndex(
          (meal) => meal.id === action.payload
        );

        if (isIndex >= 0) {
          const updatedFavMeals = [...state.favoriteMeals];
          updatedFavMeals.splice(isIndex, 1);
          return {
            ...state,
            favoriteMeals: updatedFavMeals,
          };
        } else {
          const addedMeal = state.meals.find(
            (meal) => meal.id === action.payload
          );

          return {
            ...state,
            favoriteMeals: state.favoriteMeals.concat(addedMeal),
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
    FILTERED_MEALS: (state, action) => {
      const applyFilter = action.payload;

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
    },
    REST_FILTER: (state, action) => {
      return { ...state, filterMeals: state.meals };
    },
  },
});

export const { TOGGLE_FAVORITE, FILTERED_MEALS, REST_FILTER } =
  mealSlice.actions;

export const mealReducer = mealSlice.reducer;
