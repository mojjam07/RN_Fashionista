import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconList from "../sections/iconList";
import DashboardCard from "../sections/dashboardCard";
import Header from "../sections/header";
import ClientList from "../sections/clientList";

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.dashboardContainer}>
        <Header
          username="mojjam"
          brand="MyApp"
          profileImage="https://assets/profileImage.png"
        />
        <DashboardCard
          title="Total Sales"
          value="20,000"
          subtitle="Up by 10% this week"
          icon="line-chart"
        />
        <View style={styles.iconsList}>
          <IconList />
        </View>
        <View style={styles.clientList}>
          <ClientList />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignContent: "center",
  },
  dashboardHeader: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignSelf: "center",
    marginBottom: 4,
  },
  dashboardHeaderText: {},
  welcome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 14,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "gray",
  },
  clientList: {
    marginHorizontal: 25,
  },
});
