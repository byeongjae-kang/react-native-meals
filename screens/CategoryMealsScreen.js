import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CategoryMealsScreen(props) {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <Text>This is CategoryMealsScreen!!</Text>
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
