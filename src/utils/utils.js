const suits = ["spades", "clubs", "diamonds", "hearts"];
const numbers = ["A", "2", "3", "4", "5", "6",  "7", "8", "9",  "10", "J", "Q", "K"];
const NUMBER_OF_CARDS = 21


function buildDeck() {
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

const cards = shuffleDeck (buildDeck()).slice(0, NUMBER_OF_CARDS);

export { cards, shuffleDeck };
