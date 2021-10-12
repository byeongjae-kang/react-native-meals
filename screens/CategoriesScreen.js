import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CategoriesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is categories screen!!</Text>
      <Button
        title="To Meals"
        onPress={() => props.navigation.navigate("Meals")}
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
