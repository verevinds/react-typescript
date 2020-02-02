import React from 'react';
import './WeatherDashboard.scss';
import 'src/scss/accent.scss';
import { IWeatherDashboars } from 'src/interface';

const WeatherDashboars = ({ location, current }: IWeatherDashboars) => {
	const { localtime, name } = location;
	const {
		weather_icons,
		temperature,
		wind_speed,
		wind_dir,
		pressure,
		humidity,
		cloudcover,
		uv_index,
		weather_descriptions
	} = current;

	return (
		<div className={'dashboard'}>
			<div className={'dashboard__title'}>
				<h2>{name}</h2>
				<img src={weather_icons[0]} alt='weather-icon' />
			</div>

			<div className='dashboard__info-panel'>
				<div>
					<p>Температура:</p> <p className='accent-a'>{temperature}&deg;</p>
				</div>
				<div>
					<p>Сила ветра:</p> <p className='accent-f'>{wind_speed}км/ч</p>
				</div>
				<div>
					<p>Направление ветра:</p> <p className='accent-c'>{wind_dir}</p>
				</div>
				<div>
					<p>Давление:</p> <p className='accent-e'>{pressure} MB</p>
				</div>
				<div>
					<p>Влажность:</p> <p className='accent-b'>{humidity}%</p>
				</div>
				<div>
					<p>Облачность:</p>
					<p>{cloudcover}</p>
				</div>
				<div>
					<p>УФ-индекс:</p>
					<p>{uv_index}</p>
				</div>
				<div>
					<p>{weather_descriptions}</p>
				</div>
			</div>
			<div className='dashboard__status'>
				<p>{localtime}</p>
			</div>
		</div>
	);
};

export default React.memo(WeatherDashboars);
