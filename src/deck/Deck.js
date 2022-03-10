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

export { buildDeck, shuffleDeck };
