import React from 'react'
import Main from '../../components/Main/CategoryMain/Main'

export default function CategoryMain({name}) {
	return (
		<main className='category'>
			<Main name={name} />
		</main>
	)
}
