// MenuScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from './globalStyles';

export default function MenuScreen({ navigation }) {
    const handlePlayPress = () => {
        navigation.navigate('Play');
    };

    const handleAddPicturePress = () => {
        // Navigate to Add Picture page
        console.log("Navigating to Add Picture page");
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Memory Match</Text>
            <View style={globalStyles.buttonContainer}>
                <Button title="Play" onPress={handlePlayPress} />
                <Button title="Add Picture" onPress={handleAddPicturePress} />
            </View>
        </View>
    );
}
