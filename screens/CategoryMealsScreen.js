import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MealItems } from "../components/MealItems";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItems
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
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
      <FlatList
        keyExtractor={(meal, idx) => meal.id}
        data={displayMeal}
        renderItem={renderMealItem}
        style={{ width: "95%" }}
      />
    </View>
  );
};

//pass dynamic data: beacuse we don't have any access to component props!
CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const catgeoryName = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: catgeoryName.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
