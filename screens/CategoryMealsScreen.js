import React, { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CategoryMealsScreen({ route, navigation }) {
  const { selectedCategory } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.name
    });
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.container}>
      <Text>This is {selectedCategory.name}!!</Text>
      <Button title="To Detail" onPress={() => navigation.navigate("Detail")} />
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
