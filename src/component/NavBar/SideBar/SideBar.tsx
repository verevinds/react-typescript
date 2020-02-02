import React from 'react'
import { NavLink } from 'react-router-dom'
import { ITobBarToggle } from 'src/interface'
import './SideBar.scss'

const SideBar: React.FC<{ sideBarOpen: boolean } & ITobBarToggle> = (props) => {
	let classname = ['sidebar']
	if (props.sideBarOpen) {
		classname.push('open')
	}
	return (
		<nav className={classname.join(' ')}>
			<ul>
				<li>
					<NavLink exact to='/' onClick={props.onToggleHandler}>
						Main Page
					</NavLink>
				</li>
				<li>
					<NavLink to='/weather' onClick={props.onToggleHandler}>
						weather Page
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default React.memo(SideBar)
