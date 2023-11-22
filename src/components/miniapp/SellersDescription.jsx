import React from 'react'
import {FaRegCirclePlay} from 'react-icons/fa6'

function SellersDescription() {
	return (
		<div className='main__header p-[10px]'>
			<div className='main__header-left'>
				<div className='flex items-center justify-center'>
					<h2 className='main__header-title mr-[16px]'>Adoption</h2>
					<img src='img/logos/paw.svg' alt='paw' />
				</div>
				<h3 className='main__header-subtitle Bold36'>
					We need help. so do they!
				</h3>
				<p className='main__header-description'>
					Adopt a pet and give it a home, it will be love you back
					unconditionally.
				</p>
				<div className='main__buttons'>
					<button className='main__button-view-intro'>
						<h2 className='mr-[8px]'>View Intro</h2>
						<FaRegCirclePlay />
					</button>
					<button className='main__button-explore-now'>
						<h2>Explore Now</h2>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SellersDescription
