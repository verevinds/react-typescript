import {
	WEATHER_FETCH_LOCATION,
	WEATHER_REQUESTED,
	WEATHER_REQUESTED_SUCCEEDED
} from './constants';
import {
	IWeatherFetchLocation,
	IWeatherRequested,
	IWeatherRequestedSucceeded
} from 'src/interface';

export const weatherFetchLocation = (search: string): IWeatherFetchLocation => ({
	type: WEATHER_FETCH_LOCATION,
	search
});
export const weatherRequested = (): IWeatherRequested => ({ type: WEATHER_REQUESTED });
export const weatherRequestedSucceeded = (data: any): IWeatherRequestedSucceeded => ({
	type: WEATHER_REQUESTED_SUCCEEDED,
	data
});
