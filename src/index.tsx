import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './page/MainPage';
import NavBar from 'src/component/NavBar/NavBar';
import Footer from 'src/component/Footer/Fotter';
import WeatherPage from './page/WeatherPage';

ReactDOM.render(
	<BrowserRouter>
		<NavBar />
		<main>
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route path='/weather' component={WeatherPage} />
			</Switch>
		</main>
		<Footer />
	</BrowserRouter>,
	document.getElementById('root')
);
