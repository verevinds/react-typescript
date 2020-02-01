import {
	WEATHER_FETCH_LOCATION,
	WEATHER_REQUESTED,
	WEATHER_REQUESTED_SUCCEEDED
} from 'src/redux/constants';
export interface ITobBarToggle {
	onToggleHandler: () => void;
}
/*State*/
export interface IState {
	isLoading: boolean;
	params: {
		access_key: string;
		query: string | undefined;
	};
	location: null | object;
	current: null | object;
}

/*actionCreate*/
export interface IWeatherFetchLocation {
	type: WEATHER_FETCH_LOCATION;
	search: string;
}
export interface IWeatherRequested {
	type: WEATHER_REQUESTED;
}
export interface IWeatherRequestedSucceeded {
	type: WEATHER_REQUESTED_SUCCEEDED;
	data: any;
}
export type IActionCreator = IWeatherFetchLocation | IWeatherRequested | IWeatherRequestedSucceeded;

/* STORE */
export interface IStore {
	store: IState;
}
