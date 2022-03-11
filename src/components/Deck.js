import { useState } from "react";

const DeckRow = ({ cards }) => {
    return cards.map((card) => {
	return (
	    <div className="card">
	      <span className={card.suit}></span>
	      <p>{card.number}</p>
	    </div>
	);
    });
}


const Deck = ({ cardsRows, numberOfCards }) => {
    const [deck, setDeck] = useState(cardsRows);

    const handleChooseCardRow = (row) => {
	setDeck(EleventhCardTrickSingleStep(deck, row, numberOfCards));
    }
    
    return deck.map((cards, index) => {
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

const EleventhCardTrickSingleStep = (deck, row, numberOfCards) =>{
    const deckCopy = [...deck];
    const middleRow = deckCopy.splice(row, 1)[0];
    const lastRow = deckCopy.pop();
    const firstRow = deckCopy.pop();
    const arr = [...firstRow, ...middleRow, ...lastRow];
    const cardsRows = [[],[],[]]

    for (let index = 0; index < numberOfCards; index += 3) {
	cardsRows[0].push(arr[index]);
	cardsRows[1].push(arr[index+1]);
	cardsRows[2].push(arr[index+2]);
    }
    return cardsRows; 
}

export { Deck, EleventhCardTrickSingleStep };
