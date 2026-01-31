import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>+91 98765 43210</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>support@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, 
  },
  label: {
    fontSize: 14,
    color: "#777",
  },
  value: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
  },
});
