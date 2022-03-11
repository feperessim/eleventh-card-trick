import { useState } from "react";
import { buildDeck, shuffleDeck, sliceDeck } from '../deck/Deck';

const INITIAL_ROUND = 0

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

const Deck = ({ suits, numbers, numberOfCards, numberOfCardsPerRow, numberOfRows }) => {
    const [round, setRound] = useState(INITIAL_ROUND);
    const [deck, setDeck] = useState(
	CreateShuffleAndSliceDeck(
	    suits,
	    numbers,
	    numberOfCards,
	    numberOfRows,
	    numberOfCardsPerRow));

    const handleChooseCardRow = (row) => {
	round < 3 && (setRound(round + 1) || setDeck(EleventhCardTrickSingleStep(deck, row, numberOfCards)));
    }

    const handleResetButton = () => {
	setRound(INITIAL_ROUND);
	setDeck(
	    CreateShuffleAndSliceDeck(
		suits,
		numbers,
		numberOfCards,
		numberOfRows,
		numberOfCardsPerRow)
	);
    }

    const cardsRowsToRender = deck.map((cards, index) => {
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

    return (
	<>
	  { cardsRowsToRender }
	  {round === 3 && (
	  <div className="display-choosen-card">
	    <h2>{"Chosen card is: "} </h2>
	    <div className="display-choosen-card-with-button">
	      <DeckRow cards={ [deck[1][3]] } />
	      <button onClick= { handleResetButton } className="button">Reset</button>
	    </div>
	  </div>
	  )}
	</>
    );
}

const ReorderDeck = (deck, row) => {
    const deckCopy = [...deck];
    const middleRow = deckCopy.splice(row, 1)[0];
    const lastRow = deckCopy.pop();
    const firstRow = deckCopy.pop();

    return  [...firstRow, ...middleRow, ...lastRow];
}

const EleventhCardTrickSingleStep = (deck, row, numberOfCards) =>{
    const cardsRows = [[],[],[]]
    const arr =ReorderDeck(deck, row);
	
    for (let index = 0; index < numberOfCards; index += 3) {
	cardsRows[0].push(arr[index]);
	cardsRows[1].push(arr[index+1]);
	cardsRows[2].push(arr[index+2]);
    }
    return cardsRows; 
}

const CreateShuffleAndSliceDeck = (suits, numbers, numberOfCards, numberOfRows, numberOfCardsPerRow) => {
    return sliceDeck(
	shuffleDeck(
	    buildDeck(suits, numbers)).slice(0, numberOfCards),
	   numberOfRows,
	   numberOfCardsPerRow);
}

export { Deck, EleventhCardTrickSingleStep };
