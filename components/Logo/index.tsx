import React from 'react'

import { Image, StyleSheet, View } from 'react-native'

import logo from './logo.png'

const Logo: React.FC = () => (
    <View style={s.container}>
        <Image style={s.logo} source={logo} />
    </View>
)

const s = StyleSheet.create({
    container: {
        width: '20%',
    },
    logo: {
        width: 100,
        resizeMode: 'contain'
    }
})


export default Logo
