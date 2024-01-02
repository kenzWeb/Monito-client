import React from 'react'
import OurProducts from '../../components/Main/HomeMain/OurProducts'
import DogProducts from '../../components/Main/HomeMain/Products'
import {TableProducts} from '../../components/miniapp/TableProducts'

const HomeProducts = () => {
	return (
		<>
			<DogProducts />
			<TableProducts />
			<OurProducts />
		</>
	)
}

export default HomeProducts
