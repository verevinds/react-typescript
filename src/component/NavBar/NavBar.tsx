import React, { Fragment, useState } from 'react';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import { SideBarBackdrop } from './SideBar/SideBarBackdrop';
import './NavBar.scss';

const NavBar: React.FunctionComponent = () => {
	const [state, setState] = useState({ sideBarOpen: false });
	const onToggleHandler = () => {
		setState({ sideBarOpen: !state.sideBarOpen });
	};

	return (
		<Fragment>
			<TopBar onToggleHandler={onToggleHandler} />
			<SideBar sideBarOpen={state.sideBarOpen} onToggleHandler={onToggleHandler} />
			{state.sideBarOpen ? <SideBarBackdrop onToggleHandler={onToggleHandler} /> : null}
		</Fragment>
	);
};

export default React.memo(NavBar);
