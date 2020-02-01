import {
	WEATHER_FETCH_LOCATION,
	WEATHER_REQUESTED,
	WEATHER_REQUESTED_SUCCEEDED,
	WEATHER_REQUESTED_SUCCEEDED_ERROR
} from 'src/redux/constants';
export interface ITobBarToggle {
	onToggleHandler: () => void;
}
/*State*/
export interface IState {
	isLoading: boolean;
	succeed: boolean;
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
export interface IWeatherRequestedSucceededError {
	type: WEATHER_REQUESTED_SUCCEEDED_ERROR;
}
export interface IWeatherRequestedSucceeded {
	type: WEATHER_REQUESTED_SUCCEEDED;
	data: any;
}
export type IActionCreator =
	| IWeatherFetchLocation
	| IWeatherRequested
	| IWeatherRequestedSucceeded
	| IWeatherRequestedSucceededError;

/* STORE */
export interface IStore {
	store: IState;
}
/** ImgLoader conteiner */
export interface INewImg {
	id: string;
	img: string;
}
export interface IImgLoaderItem {
	item: { id: string; img: string };
	onRemove: (id: string) => void;
}
