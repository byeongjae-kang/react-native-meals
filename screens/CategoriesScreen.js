import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen(props) {
  const renderGridItem = (dataItem) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate("Meals", {
            categoryId: dataItem.item.id
          })
        }
      >
        <Text>{dataItem.item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  }
});
