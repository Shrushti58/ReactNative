import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Shrushti Patil</Text>
      <Text style={styles.email}>shrushtipatil0508@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
});
