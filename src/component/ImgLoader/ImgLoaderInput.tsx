import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import 'src/scss/Input.scss'
import { INewImg, IImgLoaderInput, IError } from 'src/interface'
import { succeededError, Requested } from 'src/redux/actionCreators'

const ImgLoaderInput: React.FC<IImgLoaderInput> = ({ setState }) => {
	const ref = useRef<HTMLInputElement>(null)
	const dispatch = useDispatch()
	const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault()

		const imageLoader = new Image()
		imageLoader.src = ref.current!.value
		imageLoader.onload = () => {
			dispatch(Requested())
			const newImg: INewImg = {
				id: Date.now(),
				src: ref.current!.value
			}
			setState((prev: any) => [newImg, ...prev])
		}

		imageLoader.onerror = (error) => {
			const data: IError = {
				code: 601,
				type: null,
				info: `Please specify a valid url identifier using the query parameter.`
			}
			dispatch(succeededError(data))
		}
	}
	return (
		<div className={'search'}>
			<form onSubmit={handleSubmit}>
				<input
					id='location'
					placeholder='Введите url картинки'
					className='search__input'
					ref={ref}
					type='url'
				/>

				<input value={'Посмотреть'} type={'submit'} className={'search__button'} />
			</form>
		</div>
	)
}

export default React.memo(ImgLoaderInput)
