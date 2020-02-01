import React, { Fragment, useState } from 'react';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import { SideBarBackdrop } from './SideBar/SideBarBackdrop';
import { RouteComponentProps } from 'react-router-dom';
import './NavBar.scss';

const NavBar: React.FunctionComponent<RouteComponentProps<{}> | {}> = () => {
	const [state, setState] = useState({ sideBarOpen: false });
	const onToggleHandler = () => {
		setState({ sideBarOpen: !state.sideBarOpen });
		console.log(state);
	};

	return (
		<Fragment>
			<TopBar onToggleHandler={onToggleHandler} />
			<SideBar sideBarOpen={state.sideBarOpen} />
			{state.sideBarOpen ? <SideBarBackdrop onToggleHandler={onToggleHandler} /> : null}
		</Fragment>
	);
};

export default React.memo(NavBar);
