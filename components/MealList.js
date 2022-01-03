import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MealItems } from "./MealItems";

export const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItems
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetailScreen", {
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
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "95%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
