import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { taggleFavorite } from "../store/actions/mealAction";

const inq = (data) => {
  return data.map((item, idx) => {
    return (
      <View style={styles.listItem}>
        <Text key={item}>{item}</Text>
      </View>
    );
  });
};

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params.params;

  const availableMeals = useSelector((state) => state.meals.meals);
  const updatedFav = useSelector((state) =>
    state.meals.favoriteMeals.some((fav) => fav.id === mealId)
  );
  const catgeoryName = availableMeals.find((cat) => cat.id === mealId);

  const dispatch = useDispatch();
  const s = updatedFav ? "blue" : "red";
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          title="fav"
          color={s}
          onPress={() => dispatch(taggleFavorite(mealId))}
        />
      ),
    });
  });
  const textColor =
    catgeoryName.complexity === "simple"
      ? { color: "green" }
      : { color: "red" };
  return (
    <ScrollView>
      <Image source={{ uri: catgeoryName.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text>{catgeoryName.duration}m</Text>
        <Text style={textColor}>{catgeoryName.complexity.toUpperCase()}</Text>
        <Text>{catgeoryName.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}> Ingredients</Text>
      {inq(catgeoryName.ingredients)}
      <Text style={styles.title}>steps</Text>
      {inq(catgeoryName.steps)}
    </ScrollView>
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
  details: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginHorizontal: 20,

    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
