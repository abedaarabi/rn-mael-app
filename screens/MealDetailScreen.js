import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const inq = (data) => {
  return data.map((item, idx) => {
    return (
      <View>
        <Text>
          {idx + 1}. {item}
        </Text>
      </View>
    );
  });
};

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params.params;
  const catgeoryName = MEALS.find((cat) => cat.id === mealId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button title="test" onPress={() => console.log("hesllo world")} />
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>{catgeoryName.title}</Text>
      <View>{inq(catgeoryName.ingredients)}</View>
      <Button
        title="Category Screen"
        onPress={() => {
          props.navigation.popToTop(),
            {
              headerTitle: catgeoryName.title,
            };
          // props.navigation.navigate("Categorie");
        }}
      />
    </View>
  );
};

// MealDetailScreen.navigationOptions = (navigationData) => {
//   const { mealId } = navigationData.route.params.params;
//   console.log(mealId, "abed");

//   const catgeoryName = MEALS.find((cat) => cat.id === mealId);
//   return {
//     headerTitle: catgeoryName.title + "hello",
//     headerRight: (
//       <HeaderButtons>
//         <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
//         <CustomHeaderButton />,
//       </HeaderButtons>
//     ),
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
