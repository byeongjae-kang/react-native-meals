import React, { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

export default function CategoryMealsScreen({ route, navigation }) {
  const { selectedCategory } = route.params;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(selectedCategory.id) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.name
    });
  }, [navigation, selectedCategory]);

  const renderMealItem = (dataItem) => {
    return (
      <MealItem
        dataItem={dataItem}
        onSelect={() => navigation.navigate("Detail")}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={displayedMeals}
      renderItem={renderMealItem}
    />
  );
}
