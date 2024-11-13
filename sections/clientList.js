import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

// Sample data for new clients
const clients = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Michael Brown" },
  { id: "4", name: "Sarah Wilson" },
  { id: "5", name: "David Lee" },
];

export default function ClientList() {
  // Get the last three clients
  const recentClients = clients.slice(-3);

  // Function to handle showing client information
  const showClientInfo = (name) => {
    Alert.alert("Client Information", `Client Name: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recently Added Clients</Text>
      <FlatList
        data={recentClients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.clientName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showClientInfo(item.name)}
            >
              <Text style={styles.infoButtonText}>Info</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  listContainer: {
    paddingBottom: 15,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  clientName: {
    fontSize: 16,
    color: "#333",
  },
  infoButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  infoButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
