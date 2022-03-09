import { cardsRows, NUMBER_OF_CARDS } from '../utils/utils';
import { useState } from "react";

const DeckRow = (props) => {
    return props.cards.map((card) => {
	return (
	    <div className="card">
	      <span className={card.suit}></span>
	      <p>{card.number}</p>
	    </div>
	);
    });
}

const Deck = ({initialRound = 0, initialDeck = [...cardsRows]}) => {
    const [round, setRound] = useState(initialRound);
    const [deck, setDeck] = useState({'rows': initialDeck});

    const handleChooseCardRow = (row) => {
	setRound(round + 1);
	setDeck( {'rows': DeckTrick(deck, row) });
    }
    
    return deck.rows.map((cards, index) => {
	return (
	    <div className="display-cards-row">
	      <div >
		<button
		    key={ index }
		    onClick={() => handleChooseCardRow(index)}
		    className="button">
		  Row { index + 1}
		</button>
	      </div>
	      <DeckRow cards={ cards } />
	    </div>
	);
    });
}

const DeckTrick = (deck, row) =>{
    const middleRow = deck.rows.splice(row, 1)[0];
    const lastRow = deck.rows.pop();
    const firstRow = deck.rows.pop();
    const arr = [...firstRow, ...middleRow, ...lastRow];
    const cardsRows = [[],[],[]]

    for (let index = 0; index < NUMBER_OF_CARDS; index += 3) {
	cardsRows[0].push(arr[index]);
	cardsRows[1].push(arr[index+1]);
	cardsRows[2].push(arr[index+2]);
    }
    return cardsRows; 
}

export { Deck, DeckTrick };
