import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {TbPointFilled} from 'react-icons/tb'

import {useGetProdQuery} from '../../store/api/api.js'

const OurProducts = () => {
	const {data, isError, isLoading} = useGetProdQuery()
	console.log(data)

	return (
		<section className='main__products'>
			<div className='products__container'>
				<div className='mt-[60px]'>
					<h1 className='text-[#000] text-[16px]'>
						Hard to choose right products for your pets?
					</h1>
					<div className='products__header flex justify-between items-center'>
						<div>
							<h2 className='products__subtitle text-[#003459] font-bold capitalize'>
								Our Products
							</h2>
						</div>
						<div>
							<button className='products__header-button'>
								<h2 className='mr-1'>View more</h2>
								<MdKeyboardArrowRight width={40}/>
							</button>
						</div>
					</div>
				</div>
				<div className='products__cards'>
					{data &&
						data.map((prod) => (
							<div className='products__card' key={prod.id}>
								<img src={prod.img} alt={prod.name} className='products__img' />
								<h2 className='products__name ml-[3px]'>{prod.name}</h2>
								<div className='products__info'>
									<h3
										className={`products__gene Bold12 ${
											prod.size === 'none' ? '' : 'mr-[4px]'
										}`}
									>
										<span>Product: </span>
										{prod.product}
									</h3>
									{prod.size === 'none' ? '' : <TbPointFilled className='point'/>}
									{prod.size === 'none' ? (
										''
									) : (
										<h4 className='products__age Bold12'>
											<span>Size:</span> {prod.size}
										</h4>
									)}
								</div>
								<h5 className='products__price Bold14'>{prod.price} VND</h5>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default OurProducts
