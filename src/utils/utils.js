function buildDeck(suits, numbers) {
    return suits.flatMap((suit) => {
	return numbers.map((number) => {
	    return {suit: suit, number: number}
	})
    })
}

function shuffleDeck(array) {
  return array
    .map((card) => ({ card, value: Math.random() }))
    .sort((a, b) => a.value - b.value)
    .map((obj) => obj.card);
}

function buildRandomDeck(suits, numbers, number_of_cards) {
    return shuffleDeck(buildDeck(suits, numbers)).slice(0, number_of_cards);
}

export { buildRandomDeck };
