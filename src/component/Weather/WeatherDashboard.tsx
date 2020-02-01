import React from 'react';
// import { useSelector } from 'react-redux';
import './WeatherDashboard.scss';
import 'src/scss/accent.scss';

interface IWeatherDashboars {
	location: any;
	current: any;
}

const WeatherDashboars = (props: IWeatherDashboars) => {
	// const state = useSelector((state) => state);
	let { location, current } = props;
	return (
		<div className={'dashboard'}>
			<div className={'dashboard__title'}>
				<h2>{location.name}</h2>
				<img
					src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
					alt='weather-icon'
				/>
			</div>

			<div className='dashboard__info-panel'>
				<div>
					<p>Температура:</p> <p className='accent-a'>{current.temperature}</p>
				</div>
				<div>
					<p>Сила ветра:</p> <p className='accent-f'>{current.wind_speed}км/ч</p>
				</div>
				<div>
					<p>Направление ветра:</p> <p className='accent-c'>{current.wind_dir}</p>
				</div>
				<div>
					<p>Давление:</p> <p className='accent-e'>{current.pressure} MB</p>
				</div>
				<div>
					<p>Влажность:</p> <p className='accent-b'>{current.humidity}%</p>
				</div>
				<div>
					<p>Облачность:</p>
					<p>{current.cloudcover}</p>
				</div>
				<div>
					<p>УФ-индекс:</p>
					<p>{current.uv_index}</p>
				</div>
				<div>
					<p>{current.weather_descriptions}</p>
				</div>
			</div>
			<div className='dashboard__status'>
				<p>{location.localtime}</p>
			</div>
		</div>
	);
};

export default React.memo(WeatherDashboars);
