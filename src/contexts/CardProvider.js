import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import defaultData from '../utils/defaultData';

const CardContext = createContext();
const CardProvider = ({ children }) => {
	const [cards, setCards] = useState(defaultData);

	const handleAdd = text => {
		const newCard = {
			id: uuidv4(),
			text: text,
		};
		setCards([newCard, ...cards]);
	};
	const handleSubmit = card => {
		const cardIndex = cards.map(c => {
			if (c.id === card.id) {
				return card;
			}
			return c;
		});
		setCards(cardIndex);
	};

	const handleDelete = id => {
		setCards(cards.filter(c => c.id !== id));
	};
	return (
		<CardContext.Provider
			value={{
				cards,
				handleSubmit,
				handleDelete,
				handleAdd,
			}}>
			{children}
		</CardContext.Provider>
	);
};
export { CardContext };
export default CardProvider;
