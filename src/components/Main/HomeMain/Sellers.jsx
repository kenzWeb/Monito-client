import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import TableSellers from '../../miniapp/TableSellers'

const Sellers = () => {
	return (
		<section className='sellers'>
			<div className='sellers__container'>
				<div className='mt-[60px] mb-5'>
					<div className='products__header flex justify-between items-center'>
						<div className='flex items-center'>
							<h1 className='text-[#000] text-[16px] mr-1'>
								Proud to be part of
							</h1>
							<h2 className='products__subtitle text-[#003459] font-bold capitalize'>
								Pet Sellers
							</h2>
						</div>
						<div>
							<button className='products__header-button'>
								<h2 className='mr-1'>View all our sellers</h2>
								<MdKeyboardArrowRight width={40} />
							</button>
						</div>
					</div>
				</div>
				<div className='sellers__partner flex items-center justify-between'>
					<img src='img/images/salary/image 4.svg' alt='partner' />
					<img src='img/images/salary/image 6.svg' alt='partner' />
					<img src='img/images/salary/image 7.svg' alt='partner' />
					<img src='img/images/salary/image 8.svg' alt='partner' />
					<img src='img/images/salary/image 9.svg' alt='partner' />
					<img src='img/images/salary/image 10.svg' alt='partner' />
					<img src='img/images/salary/image 11.svg' alt='partner' />
				</div>
				<TableSellers />
			</div>
		</section>
	)
}

export default Sellers
