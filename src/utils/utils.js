const suits = ["spades", "clubs", "diamonds", "hearts"];
const numbers = ["A", "2", "3", "4", "5", "6",  "7", "8", "9",  "10", "J", "Q", "K"];
const NUMBER_OF_CARDS = 21;
const NUMBER_OF_CARDS_PER_ROW = 7;

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
const cardsRows =[
    cards.slice(0, NUMBER_OF_CARDS_PER_ROW),
    cards.slice(NUMBER_OF_CARDS_PER_ROW, 2*NUMBER_OF_CARDS_PER_ROW),
    cards.slice(2* NUMBER_OF_CARDS_PER_ROW, 3*NUMBER_OF_CARDS_PER_ROW)
];

export { cardsRows, NUMBER_OF_CARDS };
