import React from 'react'

import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Header from '../containers/Header'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: "#33334C",
        alignItems: "center",
    },
})


export default Home
