import './App.css';
import Deck from './components/Deck'

function App(props) {
  return (
      <div className="display-cards">
	<Deck cardsRows={ props.cardsRows }/>
      </div>
  );
}

export default App;
