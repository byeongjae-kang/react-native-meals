import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen(props) {
  const categoryId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return (
    <View style={styles.container}>
      <Text>This is {selectedCategory.name}!!</Text>
      <Button
        title="To Detail"
        onPress={() => props.navigation.navigate("Detail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
