import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyledView } from "./src/infrastructure/styledscreen";

export default function App() {
  return (
    <StyledView />
    // <View style={styles.container}>
    //   <Text>Put a StyleSheet here!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
