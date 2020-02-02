import {
	WEATHER_FETCH_LOCATION,
	REQUESTED,
	WEATHER_REQUESTED_SUCCEEDED,
	SUCCEEDED_ERROR,
	ERROR_CLOSE
} from './constants'
import {
	IWeatherFetchLocation,
	IRequested,
	IWeatherRequestedSucceeded,
	ISucceededError,
	IErrorClose,
	IError
} from 'src/interface'

export const weatherFetchLocation = (search: string): IWeatherFetchLocation => ({
	type: WEATHER_FETCH_LOCATION,
	search
})
export const Requested = (): IRequested => ({ type: REQUESTED })
export const succeededError = (error: IError): ISucceededError => ({
	type: SUCCEEDED_ERROR,
	error
})
export const weatherRequestedSucceeded = (data: any): IWeatherRequestedSucceeded => ({
	type: WEATHER_REQUESTED_SUCCEEDED,
	data
})
export const errorClose = (): IErrorClose => ({ type: ERROR_CLOSE })
