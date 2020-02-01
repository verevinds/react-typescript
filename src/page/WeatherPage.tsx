import React from 'react';
import ReactLoading from 'react-loading';
import WeatherInput from 'src/component/Weather/WeatherInput';
import WeatherDashboard from 'src/component/Weather/WeatherDashboard';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'src/redux/reducer';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const WeatherPage: React.FC = () => {
	const state = useSelector((state) => state);
	let { isLoading, succeed, location, current } = state.store;

	let weatherdashboard;
	if (isLoading) {
		weatherdashboard = <ReactLoading type={'spin'} color={'#ffffff'} className='loading' />;
	} else if (succeed) {
		weatherdashboard = location ? (
			<WeatherDashboard location={location} current={current} />
		) : (
			<p className='t-a-c'> Локация не найдена </p>
		);
	}

	return (
		<div>
			<WeatherInput />
			{weatherdashboard}
		</div>
	);
};

export default React.memo(WeatherPage);
