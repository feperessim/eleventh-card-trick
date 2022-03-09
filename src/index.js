import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const suits = ["spades", "clubs", "diamonds", "hearts"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const NUMBER_OF_CARDS = 21;
const NUMBER_OF_CARDS_PER_ROW = 7;
const NUMBER_OF_ROWS = 3;

ReactDOM.render(
    <React.StrictMode>
      <App
	  suits={ suits }
	  numbers={ numbers }
	  numberOfCards={ NUMBER_OF_CARDS }
	  numberOfCardsPerRow={ NUMBER_OF_CARDS_PER_ROW }
	  numberOfRows={ NUMBER_OF_ROWS }
      />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
