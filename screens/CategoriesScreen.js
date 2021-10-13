import React from "react";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen(props) {
  const renderGridItem = (dataItem) => {
    return (
      <CategoryGridTile
        title={dataItem.item.name}
        color={dataItem.item.color}
        onSelect={() =>
          props.navigation.navigate("Meals", {
            selectedCategory: dataItem.item
          })
        }
      />
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
