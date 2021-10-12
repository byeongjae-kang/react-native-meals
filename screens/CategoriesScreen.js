import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is categories screen!!</Text>
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