import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { CATEGORIES } from "../data/dummy";
import Colors from "../constants/colors";

let selectedcat = "";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  selectedcat = CATEGORIES.find(cat => cat.id == categoryId);
  return (
    <View style={styles.screen}>
      <Text>{selectedcat.title}</Text>
      <Text>CategoryMealsScreen screen</Text>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate({ routeName: "MealDetail" });
        }}
      />
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
