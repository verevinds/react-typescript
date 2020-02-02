import React from 'react'
import { ITobBarToggle } from 'src/interface'
import './SideBarBackdrop.scss'

export const SideBarBackdrop: React.FC<ITobBarToggle> = (props) => (
	<div className='backdrop' onClick={props.onToggleHandler} />
)
