import { useContext, useRef, useState } from 'react';
import { CardContext } from '../../contexts/CardProvider';
import './Control.css';

const MAX_LENGTH = 250;

const Control = () => {
	const inputRef = useRef();
	const { handleAdd } = useContext(CardContext);
	const [count, setCount] = useState(MAX_LENGTH);
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const handleChange = e => {
		const value = e.target.value;
		setText(value);
		setCount(MAX_LENGTH - value.length);

		if (!value) {
			setIsDisabled(true);
			return;
		} else {
			setIsDisabled(false);
		}
		if (MAX_LENGTH - value.length < 0) {
			setIsError(true);
			setIsDisabled(true);
		} else {
			setIsError(false);
			setIsDisabled(false);
		}
	};
	return (
		<form
			className='controls__form'
			onSubmit={e => {
				e.preventDefault();
				handleAdd(text);
				setText('');
				inputRef.current.focus();
			}}>
			<div className='form-group controls__container'>
				<div className='form-group controls__container'>
					<textarea
						ref={inputRef}
						className='form-control controls__textarea'
						placeholder='Tweet about 30 Days Of React ...'
						onChange={handleChange}
						value={text}
						cols={90}
						rows={10}
						autoFocus
					/>
					<p
						className={`controls__character ${
							isError ? 'error' : ''
						}`}>
						{count}
					</p>
				</div>
			</div>
			<div>
				<button
					type='submit'
					className={`control__btn ${
						isDisabled ? 'disabled' : 'active'
					}`}
					disabled={isDisabled}>
					Add post
				</button>
			</div>
		</form>
	);
};

export default Control;
