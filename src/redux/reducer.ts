import { combineReducers } from 'redux'
import { REQUESTED, WEATHER_REQUESTED_SUCCEEDED, SUCCEEDED_ERROR, ERROR_CLOSE } from './constants'
import { IState, IActionCreator } from 'src/interface'

const initialState: IState = {
	isLoading: false,
	succeed: false,
	params: {
		access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
		query: undefined
	},
	location: null,
	current: null,
	error: null
}
const reducer = (state: IState = initialState, action: IActionCreator): IState => {
	switch (action.type) {
		case REQUESTED:
			return {
				...state,
				isLoading: true,
				succeed: false,
				error: null
			}
		case WEATHER_REQUESTED_SUCCEEDED:
			return {
				...state,
				location: action.data.data.location,
				current: action.data.data.current,
				error: null,
				isLoading: false,
				succeed: true
			}
		case SUCCEEDED_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false,
				succeed: true
			}
		case ERROR_CLOSE:
			return {
				...state,
				error: null
			}
	}
	return state
}
const CombineReducers = combineReducers({
	store: reducer
})
export type RootState = ReturnType<typeof CombineReducers>
export default CombineReducers
