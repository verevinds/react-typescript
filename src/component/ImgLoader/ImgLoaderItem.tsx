import React, { useState, useEffect } from 'react';
import { IImgLoaderItem } from 'src/interface';

const ImgLoaderItem: React.FC<IImgLoaderItem> = ({ item, onRemove }) => {
	const [state, setState] = useState({ src: '' });
	const [size, setSize] = useState();
	useEffect(() => {
		const { img } = item;
		const imageLoader = new Image();
		imageLoader.src = img;

		imageLoader.onload = () => {
			setState({ src: img });
			let width = imageLoader.width.valueOf();
			let height = imageLoader.height.valueOf();
			width < height ? setSize('galary__img-width') : setSize('galary__img-height');
		};
	}, [item]);

	return (
		<div className='galary__item'>
			<img className={size} src={state.src || 'https://via.placeholder.com/150'} alt={state.src} />
			<button className='delete' value={item.id} onClick={() => onRemove(item.id)}>
				&#128465;
			</button>
		</div>
	);
};
export default React.memo(ImgLoaderItem);
