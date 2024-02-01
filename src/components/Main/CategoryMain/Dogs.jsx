import React from 'react'
import {TbPointFilled} from 'react-icons/tb'
import {useSelector} from 'react-redux'
import Sort from './Sort'

export default function Dogs({name}) {
	const {filteredData, filtred} = useSelector((state) => state.FilterProducts)

	let displayData = []

	if (filtred.length === 0) {
		displayData = filteredData
	} else {
		displayData = filtred
	}

	return (
		<section className='dogs'>
			<div className='dogs__wrapper'>
				<div className='dogs__header'>
					<div className='flex items-center'>
						<h2 className='dogs__header-title Bold24'>Small Dog</h2>
						<h2 className='dogs__header-subtitle Med14 text-center'>
							{`${displayData?.length} puppies`}
						</h2>
					</div>
					<Sort />
				</div>
				<div className='dogs__content'>
					{displayData?.map((item, i) => (
						<div className='products__card' key={item.id}>
							<img src={item.img} alt={item.name} className='products__img' />
							<h2 className='products__name ml-[3px]'>{item.name}</h2>
							<div className='products__info'>
								<h3 className='products__gene Bold12'>
									<span>Gene: </span>
									{item.gender === 'F' ? 'Female' : 'Male'}
								</h3>
								<TbPointFilled className='point' />
								<h4 className='products__age Bold12'>
									<span>Age:</span> 02 months
								</h4>
							</div>
							<h5 className='products__price Bold14'>{item.price} VND</h5>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
