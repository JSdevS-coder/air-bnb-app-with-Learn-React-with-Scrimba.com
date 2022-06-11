import React from 'react'

import Experiences from '../data/experiences'
import Card from './Card'
import Katie from '../assets/katie.png'
import Wedding from '../assets/wedding-photography.png'
import Bike from '../assets/mountain-bike.png'

export default function Main() {
	return (
		<main>
			<section className='cards'>
				{Experiences.map(exp => (
					<div key={exp.id}>
						<Card
							source={exp.coverImg}
							title={exp.title}
							grade={exp.stats.rating}
							price={exp.price}
							reviewCount={exp.stats.reviewCount}
							country={exp.location}
							description={exp.description}
							openSpots={exp.openSpots}
						/>
					</div>
				))}
			</section>
		</main>
	)
}
