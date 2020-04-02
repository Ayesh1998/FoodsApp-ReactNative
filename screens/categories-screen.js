import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button
        title="Goto CatogaryScreen"
        onPress={() => {
          navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
