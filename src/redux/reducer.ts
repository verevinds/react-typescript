import { combineReducers } from 'redux';
import { WEATHER_REQUESTED, WEATHER_REQUESTED_SUCCEEDED } from './constants';
import { IState, IActionCreator } from 'src/interface';

const initialState: IState = {
	isLoading: false,
	params: {
		access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
		query: undefined
	},
	location: null,
	current: null
};
const reducer = (state: IState = initialState, action: IActionCreator): IState => {
	switch (action.type) {
		case WEATHER_REQUESTED:
			return {
				...state,
				location: null,
				current: null,
				isLoading: false
			};
		case WEATHER_REQUESTED_SUCCEEDED:
			return {
				...state,
				location: action.data.data.location,
				current: action.data.data.current,
				isLoading: true
			};
	}
	return state;
};
const CombineReducers = combineReducers({
	store: reducer
});
export type RootState = ReturnType<typeof CombineReducers>;
export default CombineReducers;
