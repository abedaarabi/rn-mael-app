import React from "react";
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen.js";
import CategoryMealsScreen from "../screens/CategoryMealsScreen.js";
import MealDetailScreen, {
  detailOption,
  mealDetailNavigation,
} from "../screens/MealDetailScreen.js";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Color from "../constants/Color";
//
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const CategoriesScreenStack = createNativeStackNavigator();
const FavoritesScreenStack = createNativeStackNavigator();
const FilterScreenStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const CcategoriesScreen = () => (
  <CategoriesScreenStack.Navigator>
    <CategoriesScreenStack.Screen
      options={headerStyle}
      name="CategoriesScreen"
      component={CategoriesScreen}
    />
    <CategoriesScreenStack.Screen
      options={headerStyle}
      name="CategoryMealsScreen"
      component={CategoryMealsScreen}
    />
    <CategoriesScreenStack.Screen
      name="MealDetailScreen"
      component={MealDetailScreen}
      options={detailOption}
    />
  </CategoriesScreenStack.Navigator>
);

const FFfavoritesScreenStack = () => (
  <FavoritesScreenStack.Navigator>
    <FavoritesScreenStack.Screen
      name="Your Favorites"
      component={FavoritesScreen}
      options={headerStyle}
    />
  </FavoritesScreenStack.Navigator>
);
const FfilterScreenStack = () => (
  <FilterScreenStack.Navigator>
    <FilterScreenStack.Screen
      name="Filter Screen"
      component={FiltersScreen}
      options={headerStyle}
    />
  </FilterScreenStack.Navigator>
);

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Main!") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Fav") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName} size={25} color={Color.accentColor} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Main!"
        component={CcategoriesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Fav"
        component={FFfavoritesScreenStack}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Filter"
        component={FfilterScreenStack}
      />
    </Tab.Navigator>
  );
};

export const DrawerNavigator = () => (
  <NavigationContainer>
    {/* <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={MyTabs}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Fav"
        component={FFfavoritesScreenStack}
        // options={{ headerShown: false }}
      />
    </Drawer.Navigator> */}
    <MyTabs />
  </NavigationContainer>
);

const headerStyle = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor:
      Platform.OS === "ios" ? Color.accentColor : Color.primaryColor,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
