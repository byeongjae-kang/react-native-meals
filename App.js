import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import colors from "./constants/colors";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("Fail to load fonts")}
      />
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? colors.primary : ""
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : colors.primary
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meals" component={CategoryMealsScreen} />
          <Stack.Screen name="Detail" component={MealDetailScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
