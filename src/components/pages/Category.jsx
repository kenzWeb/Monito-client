import React from 'react'
import {useParams} from 'react-router-dom'
import CategoryMain from '../../inner-pages/Category/CategoryMain'
import Header from '../Header/Header'

export default function Categories() {
	const {name} = useParams()
	return (
		<div className='category'>
			<Header />
			<CategoryMain name={name} />
		</div>
	)
}
