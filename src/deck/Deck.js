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
    return Array(numberOfDecks).fill().map((value, index) =>  {
	return deck.slice(
	    index * numberOfCardsPerDeck ,
	    (index + 1) * numberOfCardsPerDeck
	)
    })
}

export { buildDeck, shuffleDeck, sliceDeck };
