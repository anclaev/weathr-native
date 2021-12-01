import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const App: React.FC = () => (
  <View style={styles.container}>
    <Text style={{ color: "#fff" }}>Привет, мир!</Text>
    <StatusBar style="light" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33334C",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default App
