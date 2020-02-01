import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './component/MainPage/MainPage';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' component={MainPage} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
