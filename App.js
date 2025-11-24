import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BANNER_IMAGE = require("./assets/ktm.jpg");

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>

          {/* Header */}
          <View style={styles.header}>
            <Ionicons name="leaf" size={24} color="#fff" />
            <Text style={styles.headerText}>Kathmandu Clean</Text>
            <Ionicons name="menu" size={26} color="#fff" />
          </View>

          {/* Banner Section */}
          <View style={styles.banner}>
            <Image source={BANNER_IMAGE} style={styles.bannerImage} />

            <View style={styles.bannerOverlay}>
              <Text style={styles.bannerTitle}>Make Kathmandu Cleaner!</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Report Waste</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Actions */}
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.actionsRow}>
            <ActionCard icon="camera" label="Report Waste" />
            <ActionCard icon="calendar" label="Schedule Pickup" />
            <ActionCard icon="information" label="Tips & Awareness" />
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <StatCard icon="trash" value="150 kg" label="Waste collected this month" />
            <StatCard icon="person" value="350" label="Users reporting" />
          </View>

          {/* Tip Section */}
          <Text style={styles.sectionTitle}>Waste Management Tips</Text>
          <View style={styles.tipCard}>
            <Ionicons name="trash" size={40} color="green" />
            <Text style={styles.tipText}>Separate your waste into recyclable and non-recyclable.</Text>
          </View>

        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <NavItem icon="home" label="Home" active />
          <NavItem icon="document-text" label="Reports" />
          <NavItem icon="person" label="Profile" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Components */
const ActionCard = ({ icon, label }) => (
  <View style={styles.actionCard}>
    <Ionicons name={icon} size={30} color="green" />
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

const StatCard = ({ icon, value, label }) => (
  <View style={styles.statCard}>
    <Ionicons name={icon} size={32} color="green" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const NavItem = ({ icon, label, active }) => (
  <View style={styles.navItem}>
    <Ionicons name={icon} size={26} color={active ? "green" : "gray"} />
    <Text style={{ color: active ? "green" : "gray" }}>{label}</Text>
  </View>
);

/* Styles */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },

  header: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { color: "#fff", fontSize: 20, fontWeight: "600" },

  banner: { position: "relative" },
  bannerImage: { width: "100%", height: 200, resizeMode: "cover" },
  bannerOverlay: { position: "absolute", top: 20, left: 20 },
  bannerTitle: { color: "#fff", fontSize: 26, fontWeight: "700", width: "70%" },

  button: {
    marginTop: 10,
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 16 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  actionCard: {
    backgroundColor: "#fff",
    width: 100,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  actionLabel: { marginTop: 8, fontSize: 13, textAlign: "center" },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  statCard: {
    backgroundColor: "#fff",
    width: 150,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  statValue: { fontSize: 22, fontWeight: "700", marginTop: 5 },
  statLabel: { textAlign: "center", fontSize: 12, color: "gray" },

  tipCard: {
    backgroundColor: "#d9f7d9",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  tipText: { marginTop: 10, fontSize: 14, textAlign: "center" },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navItem: { alignItems: "center" },
});
