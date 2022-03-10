import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { buildDeck, shuffleDeck } from './deck/Deck';

const suits = ["spades", "clubs", "diamonds", "hearts"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const NUMBER_OF_CARDS = 21;
const NUMBER_OF_CARDS_PER_ROW = 7;
const NUMBER_OF_ROWS = 3;
const deck = shuffleDeck(buildDeck(suits, numbers)).slice(0, NUMBER_OF_CARDS);
const  cardsRows = [ ];

for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    cardsRows.push(
	deck.slice(
	    i * NUMBER_OF_CARDS_PER_ROW ,
	    (i + 1) * NUMBER_OF_CARDS_PER_ROW
	)
    );
};
console.log(cardsRows);

ReactDOM.render(
    <React.StrictMode>
      <App cardsRows={ cardsRows } />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
