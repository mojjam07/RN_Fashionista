import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import from a suitable icon package

// Get device screen width
const screenWidth = Dimensions.get("window").width;

// Define icons data
const icons = [
  { id: "1", name: "home", label: "Refresh" },
  { id: "2", name: "search", label: "Search" },
  { id: "3", name: "bell", label: "Reminder" },
  { id: "4", name: "user", label: "Clients" },
  { id: "5", name: "cog", label: "Settings" },
  { id: "6", name: "heart", label: "Favorites" },
  { id: "7", name: "folder-open", label: "Gallery" },
  { id: "8", name: "envelope", label: "Messages" },
  { id: "9", name: "map", label: "Map" },
];

export default function IconList() {
  // Calculate icons per row based on screen width
  const iconsPerRow = Math.floor(screenWidth / 100);

  // Handle icon click
  const handleIconPress = (label) => {
    Alert.alert("Icon Pressed", `You clicked on ${label}`);
  };

  return (
    <FlatList
      data={icons}
      keyExtractor={(item) => item.id}
      numColumns={iconsPerRow}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handleIconPress(item.label)}
        >
          <FontAwesome name={item.name} size={40} color="#4CAF50" />
          <Text style={styles.iconLabel}>{item.label}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
});
