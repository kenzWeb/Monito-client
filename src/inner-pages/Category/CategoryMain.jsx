import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Dogs from '../../components/Main/CategoryMain/Dogs'
import Filter from '../../components/Main/CategoryMain/Filter'
import Main from '../../components/Main/CategoryMain/Main'
import {useGetDogsQuery} from '../../store/api/api.js'

import {
	setFilterName,
	setFilterSearch,
} from '../../components/features/slices/filterSlice'

export default function CategoryMain({name}) {
	const {data: dogs, error, isLoading} = useGetDogsQuery()
	const dispatch = useDispatch()
	console.log(dogs);

	useEffect(() => {
		if (dogs) {
			dispatch(setFilterName(name))
			dispatch(setFilterSearch(dogs))
		}
	}, [dogs, dispatch, name])

	return (
		<main className='category'>
			<div className='category__container'>
				<Main name={name} />
				<div className='flex w-full'>
					<Filter />
					<Dogs name={name} />
				</div>
			</div>
		</main>
	)
}
