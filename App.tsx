import React from "react"

import { Router, Stack } from "./containers/Router"

import Home from "./screens/Home"

const App: React.FC = () => (
  <Router>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  </Router>
)


export default App
