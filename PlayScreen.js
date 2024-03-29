import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { globalStyles } from './globalStyles';

export default function PlayScreen() {
    const [tiles, setTiles] = useState([]);
    const [firstTileId, setFirstTileId] = useState(null);
    const [flippedTiles, setFlippedTiles] = useState(0);
    const [matches, setMatches] = useState(0);

    useEffect(() => {
        generateTiles();
    }, []);

    useEffect(() => {
        if (matches === 6) {
            // All tiles are matched, show "You win" alert
            Alert.alert('You win', 'Congratulations!', [
                { text: 'OK', onPress: generateTiles }
            ]);
        }
    }, [matches]);

    const generateTiles = () => {
        // Generate matching pairs of numbers
        const matchingPairs = Array.from({ length: 6 }, (_, index) => index + 1);
        const pairs = [...matchingPairs, ...matchingPairs];

        // Shuffle pairs randomly
        for (let i = pairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
        }

        // Create tiles with matching pairs
        const newTiles = pairs.map((number, index) => ({
            id: index + 1,
            number: number,
            isFlipped: false,
            isVisible: true,
        }));

        setTiles(newTiles);
        setFirstTileId(null);
        setFlippedTiles(0);
        setMatches(0);
    };

    const handleTilePress = (id) => {
        if (flippedTiles >= 2) return;

        setTiles((prevTiles) =>
            prevTiles.map((tile) =>
                tile.id === id ? { ...tile, isFlipped: true } : tile
            )
        );

        setFlippedTiles(flippedTiles + 1);

        if (firstTileId === null) {
            setFirstTileId(id);
        } else {
            if (tiles[firstTileId - 1].number === tiles[id - 1].number) {
                // Matching pair found, mark tiles as matched
                setMatches(matches + 1);
                setTiles((prevTiles) =>
                    prevTiles.map((tile) =>
                        tile.number === tiles[firstTileId - 1].number
                            ? { ...tile, isFlipped: true, isMatched: true }
                            : tile
                    )
                );
            } else {
                // No match, flip tiles back after a short delay
                setTimeout(() => {
                    setTiles((prevTiles) =>
                        prevTiles.map((tile) =>
                            tile.isMatched ? tile : { ...tile, isFlipped: false }
                        )
                    );
                }, 1000);
            }

            // Reset first tile
            setFirstTileId(null);
            setFlippedTiles(0);
        }
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.gridContainer}>
                <View style={globalStyles.rowContainer}>
                    {tiles.slice(0, 3).map((tile) => (
                        <TouchableOpacity
                            key={tile.id}
                            style={[
                                globalStyles.tileContainer,
                                tile.isMatched && { backgroundColor: 'red' },
                                !tile.isVisible && { backgroundColor: 'transparent' },
                            ]}
                            onPress={() => handleTilePress(tile.id)}
                            disabled={!tile.isVisible || tile.isFlipped || flippedTiles >= 2}
                        >
                            <Text style={globalStyles.tileText}>
                                {tile.isFlipped ? tile.number : ' '}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={globalStyles.rowContainer}>
                    {tiles.slice(3, 6).map((tile) => (
                        <TouchableOpacity
                            key={tile.id}
                            style={[
                                globalStyles.tileContainer,
                                tile.isMatched && { backgroundColor: 'red' },
                                !tile.isVisible && { backgroundColor: 'transparent' },
                            ]}
                            onPress={() => handleTilePress(tile.id)}
                            disabled={!tile.isVisible || tile.isFlipped || flippedTiles >= 2}
                        >
                            <Text style={globalStyles.tileText}>
                                {tile.isFlipped ? tile.number : ' '}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={globalStyles.rowContainer}>
                    {tiles.slice(6, 9).map((tile) => (
                        <TouchableOpacity
                            key={tile.id}
                            style={[
                                globalStyles.tileContainer,
                                tile.isMatched && { backgroundColor: 'red' },
                                !tile.isVisible && { backgroundColor: 'transparent' },
                            ]}
                            onPress={() => handleTilePress(tile.id)}
                            disabled={!tile.isVisible || tile.isFlipped || flippedTiles >= 2}
                        >
                            <Text style={globalStyles.tileText}>
                                {tile.isFlipped ? tile.number : ' '}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={globalStyles.rowContainer}>
                    {tiles.slice(9, 12).map((tile) => (
                        <TouchableOpacity
                            key={tile.id}
                            style={[
                                globalStyles.tileContainer,
                                tile.isMatched && { backgroundColor: 'red' },
                                !tile.isVisible && { backgroundColor: 'transparent' },
                            ]}
                            onPress={() => handleTilePress(tile.id)}
                            disabled={!tile.isVisible || tile.isFlipped || flippedTiles >= 2}
                        >
                            <Text style={globalStyles.tileText}>
                                {tile.isFlipped ? tile.number : ' '}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}
