// globalStyles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    cardContainer: {
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    flippedCard: {
        backgroundColor: '#fff',
    },
    hiddenCard: {
        backgroundColor: 'transparent',
    },
    cardText: {
        fontSize: 24,
        color: '#fff',
    },
});
