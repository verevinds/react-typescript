import React from 'react';
import WeatherInput from 'src/component/Weather/WeatherInput';
import WeatherDashboard from 'src/component/Weather/WeatherDashboard';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'src/redux/reducer';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const WeatherPage: React.FC = () => {
	const state = useSelector((state) => state);
	console.log(state);
	let { isLoading, location, current } = state.store;
	return (
		<div>
			<WeatherInput />
			{isLoading && location ? <WeatherDashboard location={location} current={current} /> : null}
		</div>
	);
};

export default React.memo(WeatherPage);
