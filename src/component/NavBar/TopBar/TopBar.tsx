import React from 'react';
import { NavLink } from 'react-router-dom';
import { TopBarToggleButton } from './TopBarToggleButton';
import { ITobBarToggle } from 'src/interface';
import './TopBar.scss';

const TopBar: React.FC<ITobBarToggle> = (props) => {
	return (
		<header className='topbar'>
			<nav className='topbar__navigation'>
				<TopBarToggleButton onToggleHandler={props.onToggleHandler} />
				<div className='topbar__brand'>
					<NavLink exact to='/'>
						react-typescript
					</NavLink>
				</div>
				<div className='topbar__navigation-group'>
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
				</div>
			</nav>
		</header>
	);
};

export default React.memo(TopBar);
