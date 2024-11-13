import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function DashboardCard({ title, value, subtitle, icon }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {icon && (
          <FontAwesome
            name={icon}
            size={24}
            color="#4CAF50"
            style={styles.icon}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});