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
	id: number | string;
	src: string;
}
export interface IImgLoaderItem {
	item: INewImg;
	onRemove: (id: number | string) => void;
}
export interface IImgLoaderInput {
	setState: React.Dispatch<React.SetStateAction<INewImg[]>>;
}
/**Weather */
export interface IWeatherDashboars {
	location: {
		name: string;
		country: string;
		region: string;
		lat: string;
		lon: string;
		timezone_id: string;
		localtime: string;
		localtime_epoch: number;
		utc_offset: string;
	};
	current: {
		observation_time: string;
		temperature: number;
		weather_code: number;
		weather_icons: string[];
		weather_descriptions: string[];
		wind_speed: number;
		wind_degree: number;
		wind_dir: string;
		pressure: number;
		precip: number;
		humidity: number;
		cloudcover: number;
		feelslike: number;
		uv_index: number;
		visibility: number;
		is_day: string;
	};
}
