import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { CATEGORIES, MEALS } from "../data/dummy";
import Colors from "../constants/colors";
import MealItem from "../components/meal-item";

let selectedcat = "";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  selectedcat = CATEGORIES.find(cat => cat.id == categoryId);

  const selectedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderingItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={selectedMeals} renderItem={renderingItem} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  let selectedcate = CATEGORIES.find(cat => cat.id == categoryId);

  return {
    headerTitle: selectedcate.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
