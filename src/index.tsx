import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import './scss/index.scss'
import MainPage from './page/ImgLoader'
import NavBar from 'src/component/NavBar/NavBar'
import Footer from 'src/component/Footer/Fotter'
import WeatherPage from './page/WeatherPage'
import NotFound404 from './page/NotFound404'
import Alert from './component/Alert/Alert'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<NavBar />
			<main>
				<Alert />
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/weather' component={WeatherPage} />
					<Route path='*' component={NotFound404} />
				</Switch>
			</main>
			<Footer />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
