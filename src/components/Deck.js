import { cardsRows } from '../utils/utils';

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

const Deck = () => {
    return cardsRows.map((cards) => {
	return (
	    <div className="display-cards">
	      <DeckRow cards={ cards } />
	    </div>
	);
    });
}

export default Deck



