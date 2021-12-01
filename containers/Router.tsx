import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Router: React.FC = ({ children }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {children}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export {
    Router,
    Stack
}
