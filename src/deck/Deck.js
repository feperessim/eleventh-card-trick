function buildDeck(suits, numbers) {
    return suits.flatMap((suit) => {
	return numbers.map((number) => {
	    return {suit: suit, number: number}
	})
    })
}

function shuffleDeck(deck) {
    return deck
	.map((card) => ({ card, value: Math.random() }))
	.sort((a, b) => a.value - b.value)
	.map((obj) => obj.card);
}

const sliceDeck = (deck, numberOfDecks, numberOfCardsPerDeck ) => {
    const  cardsRows = [ ];
    
    for (let i = 0; i < numberOfDecks; i++) {
	cardsRows.push(
	    deck.slice(
		i * numberOfCardsPerDeck ,
		(i + 1) * numberOfCardsPerDeck
	    )
	);
    };
    return cardsRows;
}

export { buildDeck, shuffleDeck, sliceDeck };
