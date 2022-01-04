import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CategoryGridTitle } from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItems = (itemList) => {
    return (
      <CategoryGridTitle
        title={itemList.item.title}
        color={itemList.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMealsScreen", {
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
        return item.id;
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
