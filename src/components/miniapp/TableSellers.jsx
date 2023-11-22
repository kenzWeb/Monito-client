import React from 'react'
import SellersDescription from './SellersDescription'

const TableSellers = () => {
	return (
		<section className='table_sel'>
			<div className='table_sel__container'>
				<div className='table_sel-wrapper'>
					<div className='table_sel-left'>
						<SellersDescription />
					</div>
					<div className='table_sel-right'>
						<img
							className='table_sel-img'
							src='img/images/sellers/sellersTable.svg'
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TableSellers
