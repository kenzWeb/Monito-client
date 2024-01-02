import React from 'react'
import {FaRegPlayCircle} from 'react-icons/fa'
import poster from './dogs.svg'

export default function Poster() {
	return (
		<section className='poster overflow-hidden'>
			<div className='poster__container'>
				<div className='poster__wrapper'>
					<div className='poster__left'>
						<img src={poster} alt='posterImg' />
					</div>
					<div className='poster__right'>
						<h2 className='poster__title Bold52'>One more friend</h2>
						<h3 className='poster__subtitle Bold36'>Thousands more fun!</h3>
						<p className='poster__description Med12'>
							Having a pet means you have more joy, a new friend, a happy person
							who will always be with you to have fun. We have 200+ different
							pets that can meet your needs!
						</p>
						<div className='poster__buttons'>
							<button className='poster__btn-border flex items-center'>
								<h2 className='mr-[5px]'>View Intro</h2>
								<span>
									<FaRegPlayCircle />
								</span>
							</button>
							<button className='poster__btn'>Explore Now</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
