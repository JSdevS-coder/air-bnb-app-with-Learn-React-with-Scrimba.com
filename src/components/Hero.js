import React from 'react'

import Grid from '../assets/grid.png'

export default function Hero() {
	return (
		<section id='hero'>
			<img src={Grid} className='imgs' alt='grid' width='70%'></img>
			<p id='hero-text'>
				<h1>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts- all
					without leaving home.
				</p>
			</p>
		</section>
	)
}
