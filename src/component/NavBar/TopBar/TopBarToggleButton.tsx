import React from 'react';
import './TopBarToggleButton.scss';
import { ITobBarToggle } from 'src/interface';

export const TopBarToggleButton: React.FC<ITobBarToggle> = (props) => (
	<button className='toggle-button' onClick={props.onToggleHandler}>
		<div className='toggle-button__line' />
		<div className='toggle-button__line' />
		<div className='toggle-button__line' />
	</button>
);
