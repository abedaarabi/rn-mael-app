import React from "react";
import { View, Text, StyleSheet, Switch, Button } from "react-native";
import Color from "../constants/Color";

import { useDispatch } from "react-redux";
import { filterMeals } from "../store/actions/mealAction";

import {
  TOGGLE_FAVORITE,
  FILTERED_MEALS,
  REST_FILTER,
} from "../redux/counterSlice";
const FilterSwitch = (props) => (
  <View style={styles.filterContainer}>
    <Text>{props.title}</Text>
    <Switch
      value={props.state}
      onValueChange={props.onChange}
      // trackColor={{ true: Color.primaryColor }}
      // thumbColor={Color.primaryColor}
    />
  </View>
);

const FiltersScreen = (props) => {
  const [gultenFree, setGultenFree] = React.useState(false);
  const [lactoseFree, setLactoseFree] = React.useState(false);
  const [vegan, setVegan] = React.useState(false);
  const [vegetarian, setVegetarian] = React.useState(false);

  const dispatch = useDispatch();

  const saveFilter = React.useCallback(() => {
    const appliedFilter = {
      gultenFree,
      lactoseFree,
      vegan,
      vegetarian,
    };
    dispatch(FILTERED_MEALS(appliedFilter));
  }, [gultenFree, lactoseFree, vegan, vegetarian]);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Button title="Save" onPress={saveFilter} />,
    });
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Meal Screen</Text>
      <FilterSwitch
        title="Gluten Free"
        state={gultenFree}
        onChange={(newVlue) => setGultenFree(newVlue)}
      />
      <FilterSwitch
        title="Lactose Free"
        state={lactoseFree}
        onChange={(newVlue) => setLactoseFree(newVlue)}
      />
      <FilterSwitch
        title="Vegan"
        state={vegan}
        onChange={(newVlue) => setVegan(newVlue)}
      />
      <FilterSwitch
        title="Vegetarian"
        state={vegetarian}
        onChange={(newVlue) => setVegetarian(newVlue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 6,
  },
});

export default FiltersScreen;
