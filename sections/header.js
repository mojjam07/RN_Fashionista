import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";

// Get screen width and height for responsive design
const { width, height } = Dimensions.get("window");

export default function Header({ username, brand, profileImage }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.usernameText}>{username}</Text>
        <Text style={styles.brandText}>{brand}</Text>
      </View>
      <Image
        source={require("../assets/profileImage.png")}
        // source={{ uri: profileImage }}
        style={styles.profileImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 20, // Reduce margin for smaller screens
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
    width: "90%",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: height > 600 ? 18 : 16, // Adjust font size based on screen height
    color: "#333",
  },
  usernameText: {
    fontSize: height > 600 ? 22 : 20, // Adjust font size for small screens
    fontWeight: "bold",
    color: "#111",
  },
  brandText: {
    fontSize: height > 600 ? 16 : 14, // Adjust font size for small screens
    color: "#4CAF50",
  },
  profileImage: {
    width: width * 0.12, // Use percentage of screen width for responsive size
    height: width * 0.12, // Maintain aspect ratio for circular image
    borderRadius: width * 0.06, // Border radius is half of width/height
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
});
