import './app.css';
import CardList from './components/card/CardList/CardList';
import Control from './components/control/Control';
function App() {
	return (
		<div className='app'>
			<Control />
			<CardList />
		</div>
	);
}

export default App;
