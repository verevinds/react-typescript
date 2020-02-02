import { combineReducers } from 'redux'
import {
	WEATHER_REQUESTED,
	WEATHER_REQUESTED_SUCCEEDED,
	WEATHER_REQUESTED_SUCCEEDED_ERROR
} from './constants'
import { IState, IActionCreator } from 'src/interface'

const initialState: IState = {
	isLoading: false,
	succeed: false,
	params: {
		access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
		query: undefined
	},
	location: null,
	current: null
}
const reducer = (state: IState = initialState, action: IActionCreator): IState => {
	switch (action.type) {
		case WEATHER_REQUESTED:
			return {
				...state,
				location: null,
				current: null,
				isLoading: true,
				succeed: false
			}
		case WEATHER_REQUESTED_SUCCEEDED:
			return {
				...state,
				location: action.data.data.location,
				current: action.data.data.current,
				isLoading: false,
				succeed: true
			}
		case WEATHER_REQUESTED_SUCCEEDED_ERROR:
			return {
				...state,
				location: null,
				current: null,
				isLoading: false,
				succeed: true
			}
	}
	return state
}
const CombineReducers = combineReducers({
	store: reducer
})
export type RootState = ReturnType<typeof CombineReducers>
export default CombineReducers
