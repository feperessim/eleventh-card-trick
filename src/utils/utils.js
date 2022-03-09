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

function buildRandomDeck(suits, numbers, numberOfCards) {
    return shuffleDeck(buildDeck(suits, numbers)).slice(0, numberOfCards);
}

export { buildRandomDeck };
