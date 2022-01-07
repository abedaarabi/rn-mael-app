import { configureStore } from "@reduxjs/toolkit";

import { mealReducer } from "./counterSlice";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
