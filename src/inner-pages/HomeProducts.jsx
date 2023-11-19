import React from 'react'
import OurProducts from '../components/Main/OurProducts'
import DogProducts from '../components/Main/Products'
import {TableProducts} from '../components/Main/TableProducts'

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
