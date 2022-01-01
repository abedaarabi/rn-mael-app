import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CategoryGridTitle } from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItems = (itemList) => {
    return (
      <CategoryGridTitle
        title={itemList.item.title}
        color={itemList.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemList.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, idx) => {
        item.id;
      }}
      data={CATEGORIES}
      renderItem={renderGridItems}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories!",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
