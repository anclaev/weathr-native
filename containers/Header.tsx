import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Logo from '../components/Logo'

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        marginVertical: '10%',
        fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
})

export default Header
