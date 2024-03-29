// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen';
import PlayScreen from './PlayScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu' }} />
                <Stack.Screen name="Play" component={PlayScreen} options={{ title: 'Play' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
