import './App.css';
import { buildRandomDeck } from './utils/utils';
import Deck from './components/Deck'

const suits = ["spades", "clubs", "diamonds", "hearts"];
const numbers = ["A", "2", "3", "4", "5", "6",  "7", "8", "9",  "10", "J", "Q", "K"];
const NUMBER_OF_CARDS = 21
const deck = buildRandomDeck(suits, numbers, NUMBER_OF_CARDS);

function App() {
    return (
	<>
	  <div className="display-cards">
	    <Deck cards = { deck }  />
	  </div>
	</>
    );
}

export default App;
