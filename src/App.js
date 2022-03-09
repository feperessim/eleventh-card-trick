import './App.css';
import { Deck } from './components/Deck'

function App({suits, numbers, numberOfCards, numberOfCardsPerRow, numberOfRows }) {
    return (
	<div className="display-cards">
	  <Deck
	      suits={ suits }
	      numbers={ numbers }
	      numberOfCards={ numberOfCards }
	      numberOfCardsPerRow={ numberOfCardsPerRow }
	      numberOfRows={ numberOfRows }
	  />
	</div>
    );
}

export default App;
