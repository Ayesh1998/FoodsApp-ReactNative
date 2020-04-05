import { MEALS } from "../data/dummy";
import { TOGGLE_FAVORITE } from "./actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      let meal = MEALS.find((meal) => meal.id == action.mealId);
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const mealsss = MEALS.find((meal) => meal.id == action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(mealsss) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
