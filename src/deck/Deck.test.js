import { buildDeck, shuffleDeck, sliceDeck } from './Deck'

const deck = [
    { suit: "spades", number: "A" },
    { suit: "spades", number: "2" },
    { suit: "spades", number: "3" },
    { suit: "spades", number: "4" },
    { suit: "spades", number: "5" },
    { suit: "diamonds", number: "A" },
    { suit: "diamonds", number: "2" },
    { suit: "diamonds", number: "3" },
    { suit: "diamonds", number: "4" },
    { suit: "diamonds", number: "5" }
];

const slicedDeck = [
    [
	{ suit: "spades", number: "A" },
	{ suit: "spades", number: "2" },
	{ suit: "spades", number: "3" },
	{ suit: "spades", number: "4" },
	{ suit: "spades", number: "5" }
    ],
    [
	{ suit: "diamonds", number: "A" },
	{ suit: "diamonds", number: "2" },
	{ suit: "diamonds", number: "3" },
	{ suit: "diamonds", number: "4" },
	{ suit: "diamonds", number: "5" }
    ]
];

const suits = ["spades", "diamonds"];
const numbers = ["A", "2", "3", "4", "5"];
const numberOfDecks = 2;
const numberOfCardsPerDeck = 5;


describe("buildDeck", () => {
    it("creates a deck of cards of size n*m with n suits and m numbers", () => {
 	expect(buildDeck(suits, numbers)).toEqual(deck);
    });
});

describe("shuffleDeck", () => {
    it("shuffles a deck of cards", () => {
 	expect(shuffleDeck(deck)).not.toEqual(deck);
    });
});

describe("sliceDeck", () => {
    it("slices a deck into n small decks of m cards per deck", () => {
 	expect(sliceDeck(deck, numberOfDecks, numberOfCardsPerDeck)).toEqual(slicedDeck);
    });
});
