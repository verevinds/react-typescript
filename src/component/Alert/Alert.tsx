import React from 'react'
import { useSelector as useReduxSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { RootState } from 'src/redux/reducer'
import './Alert.scss'
import { errorClose } from 'src/redux/actionCreators'

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

const Alert: React.FC = () => {
	const { error } = useSelector((state) => state.store)
	const dispatch = useDispatch()

	if (error) {
		return (
			<div className={'alert'}>
				<p>
					<strong>Error!</strong> {error.code || null}: {error.info}
				</p>
				<pre className={'alert-exit'} onClick={() => dispatch(errorClose())}>
					&#10006;
				</pre>
			</div>
		)
	}

	return null
}

export default React.memo(Alert)
