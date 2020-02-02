import { put, call, takeLatest } from 'redux-saga/effects'
import * as axios from 'axios'
import { Requested, weatherRequestedSucceeded, succeededError } from './actionCreators'
import { WEATHER_FETCH_LOCATION } from './constants'

export function* watchFetch() {
	yield takeLatest(WEATHER_FETCH_LOCATION, fetchAsync)
}

function* fetchAsync(props) {
	try {
		yield put(Requested())
		const response = yield call(() =>
			axios.get(
				`http://api.weatherstack.com/current?access_key=e65fcbdb6b7edea6d370e4fd261bf357&query=${props.search}`
			)
		)
		yield put(weatherRequestedSucceeded(response))
		yield put(succeededError(response.data.error))
	} catch (error) {
		console.log(error.message)
	}
}
