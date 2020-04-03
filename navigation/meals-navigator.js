import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/categories-screen";
import MealDetailsScreen from "../screens/meals-details-screen";
import CategoryMealsScreen from "../screens/category-meals-screen";

const mealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailsScreen
  },
  { headerLayoutPreset: "center" }
);

export default createAppContainer(mealsNavigator);
