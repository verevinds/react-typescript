import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { weatherFetchLocation } from 'src/redux/actionCreators';
import './WeatherInput.scss';

const WeatherInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();
	const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(weatherFetchLocation(ref.current!.value));
		ref.current!.value = '';
	};

	return (
		<div className={'search'}>
			<form onSubmit={handleSubmit}>
				<label>
					Введите название локации
					<input
						id='location'
						placeholder='Введите название локации'
						className='search__input'
						ref={ref}
						type='search'
					/>
				</label>

				<input value={'Посмотреть'} type={'submit'} className={'search__button'} />
			</form>
		</div>
	);
};

export default React.memo(WeatherInput);
