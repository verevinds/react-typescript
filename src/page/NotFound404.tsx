import React from 'react'
import { NavLink } from 'react-router-dom'
import 'src/scss/404.scss'

const NotFound404 = () => {
	return (
		<div className='not-found'>
			<div className='not-found__container'>
				<span className='not-found__smile'>&#9785;</span>
				<h1>404 no found</h1>
				<p>We can't show the page you're looking for</p>
				<div className='not-found__links'>
					<h3>Helpful links:</h3>
					<ul>
						<li>
							<NavLink exact to='/'>
								Loading pictures page
							</NavLink>
						</li>
						<li>
							<NavLink to='/weather'>Weather forecast page</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default React.memo(NotFound404)
