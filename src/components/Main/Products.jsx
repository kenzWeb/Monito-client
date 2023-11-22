import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {TbPointFilled} from 'react-icons/tb'
import {useGetDogsQuery} from '../../store/api/api'

const DogProducts = () => {
	const {data, error, isLoading} = useGetDogsQuery()

	return (
		<section className='main__products'>
			<div className='products__container'>
				<div className='mt-[60px]'>
					<h1 className='text-[#000] text-[16px]'>Whats new?</h1>
					<div className='products__header flex justify-between items-center'>
						<div>
							<h2 className='products__subtitle text-[#003459] font-bold capitalize'>
								Take a look at some of our pets
							</h2>
						</div>
						<div>
							<button className='products__header-button'>
								<h2 className='mr-1'>View more</h2>
								<MdKeyboardArrowRight width={40} />
							</button>
						</div>
					</div>
				</div>
				<div className='products__cards'>
					{data &&
						data.map((dog) => (
							<div className='products__card' key={dog.id}>
								<img src={dog.img} alt={dog.name} className='products__img' />
								<h2 className='products__name ml-[3px]'>{dog.name}</h2>
								<div className='products__info'>
									<h3 className='products__gene Bold12'>
										<span>Gene: </span>
										{dog.gender === 'F' ? 'Female' : 'Male'}
									</h3>
									<TbPointFilled className='point'/>
									<h4 className='products__age Bold12'>
										<span>Age:</span> 02 months
									</h4>
								</div>
								<h5 className='products__price Bold14'>{dog.price} VND</h5>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default DogProducts
