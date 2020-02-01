import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CombineReducers from './reducer';
import { watchFetch } from './saga';
import { IStore } from 'src/interface';

const sagaMiddleware = createSagaMiddleware();
const configureStore = (initialState?: IStore) => {
	return createStore(CombineReducers, initialState, applyMiddleware(sagaMiddleware));
};
const store = configureStore();
sagaMiddleware.run(watchFetch);

export default store;
