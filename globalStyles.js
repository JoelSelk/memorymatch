// globalStyles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridContainer: {
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    tileContainer: {
        width: 100,
        height: 100,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#007bff', // Blue color when visible but not flipped
    },
    flippedTile: {
        backgroundColor: '#fff',
    },
    tileText: {
        fontSize: 24,
        color: '#fff',
    },
});
