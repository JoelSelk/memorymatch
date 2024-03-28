// PlayScreen.js
import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import { globalStyles } from './globalStyles';
import { StatusBar } from 'expo-status-bar';

export default function PlayScreen() {
    const [cards, setCards] = useState([
        { id: 1, number: 1, isFlipped: false, isVisible: true },
        { id: 2, number: 1, isFlipped: false, isVisible: true },
        { id: 3, number: 2, isFlipped: false, isVisible: true },
        { id: 4, number: 2, isFlipped: false, isVisible: true },
        { id: 5, number: 3, isFlipped: false, isVisible: true },
        { id: 6, number: 3, isFlipped: false, isVisible: true },
        { id: 7, number: 4, isFlipped: false, isVisible: true },
        { id: 8, number: 4, isFlipped: false, isVisible: true },
    ]);

    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardPress = (id, number) => {
        if (selectedCards.length === 2) {
            return;
        }

        const updatedCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, isFlipped: true };
            }
            return card;
        });

        setCards(updatedCards);

        setSelectedCards([...selectedCards, { id, number }]);

        if (selectedCards.length === 1 && selectedCards[0].number === number) {
            setTimeout(() => {
                const updatedCards = cards.map(card => {
                    if (card.number === number) {
                        return { ...card, isVisible: false };
                    }
                    return card;
                });
                setCards(updatedCards);
            }, 1000);
        } else if (selectedCards.length === 1) {
            setTimeout(() => {
                const updatedCards = cards.map(card => {
                    return { ...card, isFlipped: false };
                });
                setCards(updatedCards);
            }, 1000);
        }
    };

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={[
                globalStyles.cardContainer,
                item.isFlipped && globalStyles.flippedCard,
                !item.isVisible && globalStyles.hiddenCard,
            ]}
            onPress={() => handleCardPress(item.id, item.number)}
            disabled={!item.isVisible || selectedCards.length === 2}
        >
            <Text style={globalStyles.cardText}>{item.isFlipped ? item.number : ' '}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={cards}
                renderItem={renderCard}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
            />
            <StatusBar style="auto" />
        </View>
    );
}
