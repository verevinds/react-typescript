import {
	WEATHER_FETCH_LOCATION,
	REQUESTED,
	WEATHER_REQUESTED_SUCCEEDED,
	SUCCEEDED_ERROR,
	ERROR_CLOSE
} from 'src/redux/constants'
export interface ITobBarToggle {
	onToggleHandler: () => void
}
/*State*/
export interface IState {
	isLoading: boolean
	succeed: boolean
	params: {
		access_key: string
		query: string | undefined
	}
	location: null | object
	current: null | object
	error: null | {
		code: number | null
		type: string | null
		info: string
	}
}

/*actionCreate*/
export interface IWeatherFetchLocation {
	type: WEATHER_FETCH_LOCATION
	search: string
}
export interface IRequested {
	type: REQUESTED
}
export interface IErrorClose {
	type: ERROR_CLOSE
}
export interface ISucceededError {
	type: SUCCEEDED_ERROR
	error: IError
}
export interface IWeatherRequestedSucceeded {
	type: WEATHER_REQUESTED_SUCCEEDED
	data: any
}
export type IActionCreator =
	| IWeatherFetchLocation
	| IRequested
	| IWeatherRequestedSucceeded
	| ISucceededError
	| IErrorClose

/* STORE */
export interface IStore {
	store: IState
}
/** ImgLoader conteiner */
export interface INewImg {
	id: number | string
	src: string
}
export interface IImgLoaderItem {
	item: INewImg
	onRemove: (id: number | string) => void
}
export interface IImgLoaderInput {
	setState: React.Dispatch<React.SetStateAction<INewImg[]>>
}
/**Weather */
export interface IWeatherDashboars {
	location: {
		name: string
		country: string
		region: string
		lat: string
		lon: string
		timezone_id: string
		localtime: string
		localtime_epoch: number
		utc_offset: string
	}
	current: {
		observation_time: string
		temperature: number
		weather_code: number
		weather_icons: string[]
		weather_descriptions: string[]
		wind_speed: number
		wind_degree: number
		wind_dir: string
		pressure: number
		precip: number
		humidity: number
		cloudcover: number
		feelslike: number
		uv_index: number
		visibility: number
		is_day: string
	}
}
/**ERROR */
export interface IError {
	code: number | null
	type: string | null
	info: string
}
