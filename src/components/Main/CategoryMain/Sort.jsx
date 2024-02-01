import React, {useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'

export default function Sort() {
	const [sort, setSort] = useState('Popular')
	const [isOpen, setIsOpen] = useState(false)

	const handleSort = (e) => {
		const selectedSort = e.target.getAttribute('data-value')
		setSort(selectedSort)
		setIsOpen(false)
	}
	return (
		<div className='sort__wrapper'>
			<button
				className='sort__button flex items-end'
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<h2 className='mr-[5px]'>{`Sort by: ${sort}`} </h2>
				<IoIosArrowDown className={`${isOpen ? 'rotate-180' : ''}`} />
			</button>
			<div className={`sort__items Med14 ${isOpen ? 'show' : ''}`}>
				<h2
					onClick={handleSort}
					className='sort__item Med14'
					data-value='Popular'
				>
					Popular
				</h2>
				<h2 onClick={handleSort} className='sort__item Med14' data-value='Age'>
					Age
				</h2>
				<h2
					onClick={handleSort}
					className='sort__item Med14'
					data-value='Price'
				>
					Price
				</h2>
			</div>
		</div>
	)
}
