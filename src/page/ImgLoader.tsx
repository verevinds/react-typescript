import React, { useState, useEffect } from 'react';
import ImgLoaderInput from 'src/component/ImgLoader/ImgLoaderInput';
import ImgLoaderItem from 'src/component/ImgLoader/ImgLoaderItem';
import { INewImg } from 'src/interface';
import 'src/scss/ImgLoaderItem.scss';

const ImgLoader: React.FC = () => {
	useEffect(() => {
		const saveImgs = JSON.parse(localStorage.getItem('imgs') || '[]') as INewImg[];
		setState(saveImgs);
	}, []);

	const [imgs, setState] = useState<INewImg[]>([]);
	useEffect(() => {
		localStorage.setItem('imgs', JSON.stringify(imgs));
	}, [imgs]);

	const onRemove = (id: number | string) => {
		setState((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div>
			<ImgLoaderInput setState={setState} />

			<div className='galary'>
				{imgs.map((item) => (
					<ImgLoaderItem item={item} key={item.id} onRemove={onRemove} />
				))}
			</div>
		</div>
	);
};

export default React.memo(ImgLoader);
