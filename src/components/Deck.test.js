import { EleventhCardTrickSingleStep } from './Deck'

const deck = [
    [{	suit: "spades", number: "Q"},
     {	suit: "clubs", number: "4"},
     {	suit: "hearts", number: "5"},
     {	suit: "clubs", number: "3"},
     {	suit: "clubs", number: "5"},
     {	suit: "diamonds", number: "4"},
     {	suit: "diamonds", number: "5"}],

    [{	suit: "diamonds", number: "K"},
     {	suit: "hearts", number: "10"},
     {	suit: "spades", number: "10"},
     {	suit: "hearts", number: "9"},
     {	suit: "diamonds", number: "2"},
     {	suit: "spades", number: "J"},
     {	suit: "spades", number: "3"}],

    [{	suit: "clubs", number: "8"},
     {	suit: "spades", number: "5"},
     {	suit: "hearts", number: "J"},
     {	suit: "spades", number: "9"},
     {	suit: "clubs", number: "9"},
     {	suit: "spades", number: "A"},
     {	suit: "clubs", number: "A"}]
];

const deckAfter = [
    [{	suit: "spades", number: "Q"},
     {	suit: "clubs", number: "3"},
     {	suit: "diamonds", number: "5"},
     {	suit: "hearts", number: "J"},
     {	suit: "spades", number: "A"},
     {	suit: "hearts", number: "10"},
     {	suit: "diamonds", number: "2"}],

    [{	suit: "clubs", number: "4"},
     {	suit: "clubs", number: "5"},
     {	suit: "clubs", number: "8"},
     {	suit: "spades", number: "9"},
     {	suit: "clubs", number: "A"},
     {	suit: "spades", number: "10"},
     {	suit: "spades", number: "J"}],

    [{	suit: "hearts", number: "5"},
     {	suit: "diamonds", number: "4"},
     {	suit: "spades", number: "5"},
     {	suit: "clubs", number: "9"},
     {	suit: "diamonds", number: "K"},
     {	suit: "hearts", number: "9"},
     {	suit: "spades", number: "3"}]
];

const row = 2;
const NUMBER_OF_CARDS = 21;

describe("DeckTrick", () => {
    it("simulates the 11th card trick on an array of three arrays", () => {
 	expect(EleventhCardTrickSingleStep(deck, row, NUMBER_OF_CARDS)).toEqual(deckAfter);
    });
});
