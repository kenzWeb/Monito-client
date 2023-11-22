import React from 'react'
import MainDescription from './MainDescription'

export const TableProducts = () => {
	return (
		<section className='table_prod'>
			<div className='table_prod__container'>
				<div className='table_prod-wrapper'>
					<div className='table_prod-left'>
						<img
							className='table_prod-img'
							src='img/images/prod/tableProd.svg'
							alt=''
						/>
					</div>
					<div className='table_prod-right p-[15px] text-right'>
						<MainDescription
							title={'Bold56'}
							subtitle={'Bold24'}
							desc={'Med12'}
							lhSubtitle={'54'}
							lhDesc={'18'}
							justifyContent={'end'}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
