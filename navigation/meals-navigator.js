import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/categories-screen";
import MealDetailsScreen from "../screens/meals-details-screen";
import CategoryMealsScreen from "../screens/category-meals-screen";
import Colors from "../constants/colors";
import FavouriteScreen from "../screens/favourite-screen";

const mealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const mealsTabNavigator = createBottomTabNavigator(
  {
    Meals: mealsNavigator,
    Favourites: FavouriteScreen,
  }
  // {
  //   tabBarOptions: {
  //     // activeBackgroundColor: Colors.accentColor,
  //     activeTintColor: Colors.accentColor,
  //   },
  // }
);

export default createAppContainer(mealsTabNavigator);
