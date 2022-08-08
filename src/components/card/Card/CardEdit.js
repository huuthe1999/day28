import { useContext, useState } from 'react';
import { CardContext } from '../../../contexts/CardProvider';
import './Card.css';
const CardEdit = ({ id, text, handleEdit }) => {
	const [value, setValue] = useState(text);
	const { handleSubmit } = useContext(CardContext);
	const handleChange = e => {
		setValue(e.target.value);
	};

	return (
		<div className='card__edit'>
			<textarea value={value} onChange={handleChange}></textarea>
			<br />
			<button
				className='card__btn save'
				onClick={() => {
					handleSubmit({ id, text: value });
					handleEdit();
				}}>
				Save
			</button>
			<button className='card__btn cancel' onClick={handleEdit}>
				Cancel
			</button>
		</div>
	);
};

export default CardEdit;
