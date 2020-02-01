import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './component/MainPage/MainPage';
import NavBar from './component/NavBar/NavBar';

ReactDOM.render(
	<BrowserRouter>
		<NavBar />
		<main>
			<Switch>
				<Route path='/' component={MainPage} />
			</Switch>
		</main>
	</BrowserRouter>,
	document.getElementById('root')
);
