import { cards } from '../utils/utils';

const Deck = () => {
    return cards.map((card) => {
	return (
	    <div className="card">
	      <span className={card.suit}></span>
	      <p>{card.number}</p>
	    </div>
	);
    });
}

export default Deck
