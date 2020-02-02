import React, { useRef } from 'react';
import 'src/scss/Input.scss';
import { INewImg, IImgLoaderInput } from 'src/interface';

const ImgLoaderInput: React.FC<IImgLoaderInput> = ({ setState }) => {
	const ref = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault();

		const imageLoader = new Image();
		imageLoader.src = ref.current!.value;
		imageLoader.onload = () => {
			const newImg: INewImg = {
				id: Date.now(),
				src: ref.current!.value
			};
			setState((prev: any) => [newImg, ...prev]);
		};

		imageLoader.onerror = (error) => {
			alert('По этой ссылки нет картинки');
		};
	};
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
	);
};

export default React.memo(ImgLoaderInput);
