import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button";

const CategoriesScreen = ({ navigation }) => {
  const renderItem = (data) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          margin: 15,
          height: hp("15%"),
          backgroundColor: data.item.color,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 15,
          borderRadius: 16,
          elevation: 6,
        }}
        onPress={() => {
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: data.item.id,
            },
          });
        }}
      >
        <View>
          <Text
            style={{
              color: "#30302f",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "right",
            }}
            numberOfLines={2}
          >
            {data.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderItem} />;
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meals Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {},
});

export default CategoriesScreen;
