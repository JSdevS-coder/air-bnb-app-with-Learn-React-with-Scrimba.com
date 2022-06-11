import React from 'react'

import Star from '../assets/star.png'

export default function Card({
	source,
	title,
	price,
	grade,
	reviewCount,
	country,
	description,
	openSpots,
}) {
	let i = 0
	return (
		<article className='experience'>
			<div
				className='status'
				style={{ display: `${openSpots === 0 ? 'block' : 'none'}` }}>
				SOLD OUT
			</div>
			<div className='image'>
				<img src={source} alt='experience1' width='400px' />
			</div>

			<p className='grade'>
				<img src={Star} alt='star icon' width='50px' />
				<p>
					{grade} ({reviewCount}) - {country}
				</p>
			</p>
			<h3>{title}</h3>
			<p className='price'>
				<b>From {price}$</b> per person
			</p>
			<p className='desc'>{description}</p>
		</article>
	)
}
