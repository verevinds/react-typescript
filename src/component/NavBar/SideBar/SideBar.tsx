import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';

const SideBar: React.FC<{ sideBarOpen: boolean }> = (props) => {
	let classname = ['sidebar'];
	if (props.sideBarOpen) {
		classname.push('open');
	}
	return (
		<nav className={classname.join(' ')}>
			<ul>
				<li>
					<NavLink exact to='/'>
						Main Page
					</NavLink>
				</li>
				<li>
					<NavLink exact to='/'>
						weather Page
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default React.memo(SideBar);
