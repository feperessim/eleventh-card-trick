import './App.css';
import Deck from './components/Deck'

function App(props) {
  return (
      <div className="display-cards">
      <Deck cards={ props.cards }/>
      </div>
  );
}

export default App;
