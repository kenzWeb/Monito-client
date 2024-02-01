import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
	setFilterGender,
	setFilterColor,
} from '../../features/slices/filterSlice'

export default function Filter() {
	const [checkedValue, setCheckedValue] = useState({
		gender: [],
		color: [],
		breed: [],
	})
	const dispatch = useDispatch()

	const handleCheckGender = (e) => {
		let {value, checked} = e.target

		if (checked) {
			setCheckedValue((prev) => ({gender: [...prev.gender, value]}))
		} else if (checkedValue.gender.includes(value)) {
			setCheckedValue((prev) => ({
				gender: prev.gender.filter((item) => item !== value),
			}))
		} else {
			setCheckedValue((prev) => {
				return {gender: [...prev.gender.filter((skill) => skill === value)]}
			})
		}
	}

	const handleCheckColor = (e) => {
		let {value, checked} = e.target

		if (checked) {
			setCheckedValue((prev) => ({color: [...prev.color, value]}))
		} else if (checkedValue.color.includes(value)) {
			setCheckedValue((prev) => ({
				color: prev.color.filter((item) => item !== value),
			}))
		} else {
			setCheckedValue((prev) => {
				return {color: [...prev.color.filter((skill) => skill === value)]}
			})
		}
	}

	console.log(checkedValue)

	useEffect(() => {
		if (checkedValue) {
			dispatch(setFilterGender(checkedValue))
		}
	}, [checkedValue, dispatch])

	return (
		<section className='filter'>
			<div className='filter__container'>
				<div className='filter__title'>Filter</div>
				<div className='filter__item'>
					<div className='filter__subtitle'>Gender</div>
					<div className='filter__item-wrapper'>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckGender}
								value='M'
								id='m'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<label className='filter__checkbox-title' for='m'>
									Male
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckGender}
								value='F'
								id='f'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<label className='filter__checkbox-title' for='f'>
									Female
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='filter__item'>
					<div className='filter__subtitle'>Color</div>
					<div className='filter__item-wrapper'>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckColor}
								value='Red'
								id='red'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<div className='filter__frame red'></div>
								<label className='filter__checkbox-title' for='red'>
									Red
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckColor}
								value='Apricot'
								id='apricot'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<div className='filter__frame apricot'></div>
								<label className='filter__checkbox-title' for='apricot'>
									Apricot
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckColor}
								value='Black'
								id='black'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<div className='filter__frame black'></div>
								<label className='filter__checkbox-title' for='black'>
									Black
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckColor}
								value='Blackwhite'
								id='blackwhite'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<div className='filter__frame blackwhite'></div>
								<label className='filter__checkbox-title' for='blackwhite'>
									Black & White
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckColor}
								value='Silver'
								id='silver'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<div className='filter__frame silver'></div>
								<label className='filter__checkbox-title' for='silver'>
									Silver
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								onChange={handleCheckColor}
								value='Tan'
								id='tan'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<div className='filter__frame tan'></div>
								<label className='filter__checkbox-title' for='tan'>
									Tan
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='filter__item'>
					<div className='filter__subtitle'></div>
					<div className='filter__item-wrapper'>
						<input className='price-input' type='number' placeholder='Min' />
						<input className='price-input' type='number' placeholder='Max' />
					</div>
				</div>
				<div className='filter__item'>
					<div className='filter__subtitle'>breed</div>
					<div className='filter__item-wrapper'>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								// onChange={()}
								value='small'
								id='small'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<label className='filter__checkbox-title' for='small'>
									Small
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								// onChange={()}
								value='medium'
								id='medium'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<label className='filter__checkbox-title' for='medium'>
									Medium
								</label>
							</div>
						</div>
						<div className='filter__wrapper'>
							<input
								type='checkbox'
								// onChange={()}
								value='large'
								id='large'
								className='filter__wrapper-checkbox'
							/>
							<div className='filter__wrapper-content'>
								<label className='filter__checkbox-title' for='large'>
									Large
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
