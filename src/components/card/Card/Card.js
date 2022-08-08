import { useContext, useState } from 'react';
import { CardContext } from '../../../contexts/CardProvider';
import formatDate from '../../../utils/formatDate';
import './Card.css';
import CardEdit from './CardEdit';
const Card = ({ id, text }) => {
	const { handleDelete } = useContext(CardContext);
	const [isEdit, setIsEdit] = useState(false);

	const handleEdit = () => {
		setIsEdit(!isEdit);
	};
	return (
		<>
			{isEdit ? (
				<CardEdit id={id} text={text} handleEdit={handleEdit} />
			) : (
				<div className='card'>
					<div className='card__user'>
						<i className='fas fa-user'></i>
						<h4>
							Asabeneh Yetayeh <span>@Asabeneh</span>
						</h4>
					</div>
					<div className='card__text'>{text}</div>
					<div className='card__actions'>
						<div>
							<i className='far fa-edit' onClick={handleEdit}></i>
							<i
								className='far fa-trash-alt'
								onClick={() => handleDelete(id)}></i>
						</div>
						<div>
							<i className='far fa-comment'></i>
							<i className='far fa-heart'></i>
							<i className='fas fa-retweet'></i>
						</div>

						<div>
							<small className='card__time'>{formatDate}</small>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Card;
