import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FilterScreen() {
  return (
    <View style={styles.container}>
      <Text>This is FilterScreen!!</Text>
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