// App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from './globalStyles';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const handlePlayPress = () => {
        // Navigate to Play page
        console.log("Navigating to Play page");
    };

    const handleAddPicturePress = () => {
        // Navigate to Add Picture page
        console.log("Navigating to Add Picture page");
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Welcome to My App</Text>
            <View style={globalStyles.buttonContainer}>
                <Button title="Play" onPress={handlePlayPress} />
                <Button title="Add Picture" onPress={handleAddPicturePress} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
