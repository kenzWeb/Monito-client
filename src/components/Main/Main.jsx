import React from 'react'

const Main = () => {
	return (
		<section className='main'>
			<div className='main__container'>
				<div className='main__header'>
					<div className='main__header-left'>
						<h2 className='main__header-title'>One more friend</h2>
						<h3 className='main__header-subtitle'>Thousands more fun!</h3>
						<p className='main__header-description'>
							Having a pet means you have more joy, a new friend, a happy person
							who will always be with you to have fun. We have 200+ different
							pets that can meet your needs!
						</p>
						<div className='main__buttons'>
							<button className='main__button-view-intro'>
								<h2>View Intro</h2>
								<img src='img/images/main/maindog.svg' alt='' />
							</button>
							<button className='main__button-explore-now'>
								<h2>Explore Now</h2>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Main
