import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MealItem from "../components/meal-item";
import { MEALS, CATEGORIES } from "../data/dummy";

const FavouriteScreen = (props) => {
  let selectedcat = "";

  // selectedcat = CATEGORIES.find((cat) => cat.id == "c1");

  const selectedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf("c1") >= 0
  );

  const renderingItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
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

FavouriteScreen.navigationOptions = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouriteScreen;
