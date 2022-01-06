export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const FILTERED_MEALS = "FILTERED_MEALS";
export const REST_FILTER = "REST_FILTER";

export const taggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const filterMeals = (filterSttings) => {
  return { type: FILTERED_MEALS, filter: filterSttings };
};
export const restFilter = () => {
  return { type: REST_FILTER };
};
