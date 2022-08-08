import { useContext } from 'react';
import { CardContext } from '../../../contexts/CardProvider';
import Card from '../Card/Card';
import './CardList.css';

const CardList = () => {
	const { cards } = useContext(CardContext);
	return (
		<div>
			{cards.map(({ id, text }) => (
				<Card key={id} id={id} text={text} />
			))}
		</div>
	);
};

export default CardList;
