import React from 'react'

const Main = () => {
	return (
		<section className='main'>
			<div className='main__container'>
				<div className='main__header'>
					<div className='main__header-left'>
						<h2 className='main__header-title'>One more friend</h2>
						<h3 className='main__header-subtitle Bold46'>Thousands more fun!</h3>
						<p className='main__header-description Med16'>
							Having a pet means you have more joy, a new friend, a happy person
							who will always be with you to have fun. We have 200+ different
							pets that can meet your needs!
						</p>
						<div className='main__buttons'>
							<button className='main__button-view-intro'>
								<h2 className='mr-[8px]'>View Intro</h2>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
								>
									<path
										d='M10 9V15L15 12L10 9Z'
										fill='#003459'
										stroke='#003459'
										stroke-width='3'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</button>
							<button className='main__button-explore-now'>
								<h2>Explore Now</h2>
							</button>
						</div>
					</div>
					<div className='main__header-right'>
						<img
							className='main__header-img'
							src='img/images/main/maindog.png'
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Main
