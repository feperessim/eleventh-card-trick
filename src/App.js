import './App.css';
import { Deck } from './components/Deck'

function App({cardsRows, numberOfCards }) {
    return (
	<div className="display-cards">
	  <Deck cardsRows={ cardsRows } numberOfCards={numberOfCards}/>
	</div>
    );
}

export default App;
