import React from "react"

import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import Header from "./containers/Header"
import { Router, Stack } from "./containers/Router"

const App: React.FC = () => (
  <View style={styles.container}>
    <Header />
    <StatusBar style="light" />
    <Router />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#33334C",
    alignItems: "center",
  },
})

export default App
