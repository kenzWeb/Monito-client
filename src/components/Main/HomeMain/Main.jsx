import React from 'react'
import MainDescription from '../../miniapp/MainDescription'

const Main = () => {
	return (
		<section className='main'>
			<div className='main__container'>
				<MainDescription
					title={'Bold60'}
					subtitle={'Bold28'}
					desc={'Med16'}
					mtt={'4'}
					mtst={'24'}
					mtd={'34'}
					lhDesc={'24'}
					justifyContent={'start'}
				/>
				<div className='main__header-right'>
					<img
						className='main__header-img'
						src='img/images/main/maindog.png'
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}

export default Main
