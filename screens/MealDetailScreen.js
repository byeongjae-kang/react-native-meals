import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MealDetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is MealDetailScreen!!</Text>
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