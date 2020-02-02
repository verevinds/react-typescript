import React from 'react'
import './Fotter.scss'

const Footer = () => (
	<footer className='code'>
		<p>
			© 2020 Verevin Denis <a href='https://github.com/verevinds/'>GitHub</a>. Все права защищены.
		</p>
		<p>React+TypeScript+Redux+Saga+Hook</p>
	</footer>
)

export default React.memo(Footer)
