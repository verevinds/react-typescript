import React, { useState, useEffect } from 'react';
import { IImgLoaderItem } from 'src/interface';

const ImgLoaderItem: React.FC<IImgLoaderItem> = ({ item, onRemove }) => {
	const [image, setState] = useState({ src: '' });
	const [size, setSize] = useState();
	const { src, id } = item;

	useEffect(() => {
		const imageLoader = new Image();

		imageLoader.src = src;

		imageLoader.onload = () => {
			setState({ src });
			let width = imageLoader.width.valueOf();
			let height = imageLoader.height.valueOf();
			width < height ? setSize('galary__img-width') : setSize('galary__img-height');
		};
	}, [src]);

	return (
		<div className='galary__item'>
			<img className={size} src={image.src || 'https://via.placeholder.com/150'} alt={image.src} />
			<button className='delete' value={id} onClick={() => onRemove(id)}>
				&#128465;
			</button>
		</div>
	);
};
export default React.memo(ImgLoaderItem);
