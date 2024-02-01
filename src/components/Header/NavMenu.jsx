import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {FiSearch} from 'react-icons/fi'
import {IoMdArrowDropup} from 'react-icons/io'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {useGetDogsQuery} from '../../store/api/api'
import '../../styles/base/base.scss'
import {setFilterName, setFilterSearch} from '../features/slices/filterSlice'
import useGetDogs from '../hooks/useGetDogs'
import Hlogo from '../miniapp/Hlogo'
import Hmenu from '../miniapp/Hmenu'
import SearchDrop from './SearchDrop'

const NavMenu = ({toggleSubCategoryMenu, subCategoryMenu}) => {
	const dispatch = useDispatch()
	const [langMenu, setLangMenu] = useState(false)
	let [langCheck, setLangCheck] = useState('USA')
	const {t, i18n} = useTranslation()
	const [burger, setBurger] = useState(false)
	const [searchForm, setSearchForm] = useState(false)
	const {popular, large, small} = useGetDogs()
	const {data: dogs, error, isLoading} = useGetDogsQuery()

	useEffect(() => {
		i18n.changeLanguage(langCheck)
	}, [i18n, langCheck])
	const toggleLangMenu = () => {
		setLangMenu((prev) => !prev)
	}

	const chooseLang = (e) => {
		const selectedLang = e.target.getAttribute('data-value')
		if (selectedLang !== langCheck) {
			setLangCheck(selectedLang)
		}
		setLangMenu(false)
	}

	const subDropdown = (e) => {
		const categoryItem = e.currentTarget
		categoryItem.classList.toggle('none')
	}

	return (
		<>
			{searchForm && <SearchDrop />}
			<motion.div className='header flex items-center justify-between'>
				<motion.div
					className='header__burger'
					onClick={() => setBurger((prev) => !prev)}
				>
					<Hmenu />
				</motion.div>
				<motion.div className='header_logo'>
					<Hlogo />
				</motion.div>
				<nav className={`header__navigation ${burger ? 'vis' : ''}`}>
					<ul className='nav_list flex items-center gap-[48px] text-primary_color_dark_blue font-bold leading-[24px]'>
						<li className='nav_link'>
							<Link to='/' href='Home'>
								{t('nav_home')}
							</Link>
						</li>
						<li className='nav_link flex items-start flex-col'>
							<div className='flex items-center mb-2'>
								<span onClick={toggleSubCategoryMenu}>{t('nav_category')}</span>
								<span>
									<IoMdArrowDropup
										onClick={toggleSubCategoryMenu}
										className={`${
											subCategoryMenu ? '' : 'rotate-180'
										} transition-all`}
									/>
								</span>
							</div>
							{subCategoryMenu && (
								<div className='category__wrapper'>
									<div className='category-list'>
										<ul className='main-list'>
											<li className='category-item none' onClick={subDropdown}>
												<div className='flex items-center category__header mt-[30px]'>
													<span className='category-name'>Popular</span>
													<IoMdArrowDropup
														className={`arrow-icon ${
															subCategoryMenu ? '' : 'rotate-180'
														} transition-all`}
													/>
												</div>

												<div className='sub-category-menu'>
													<ul className='sub-category-list'>
														{popular &&
															popular.map((dog, i) => (
																<li key={i}>
																	<Link
																		to={`/category/${dog.name}`}
																		href='Akita'
																	>
																		{dog.name}
																	</Link>
																</li>
															))}
													</ul>
												</div>
											</li>
											<li className='category-item none' onClick={subDropdown}>
												<div className='flex items-center category__header'>
													<span className='category-name'>Large Dog</span>
													<IoMdArrowDropup
														className={`arrow-icon ${
															subCategoryMenu ? '' : 'rotate-180'
														} transition-all`}
													/>
												</div>
												<div className='sub-category-menu'>
													<ul className='sub-category-list'>
														{large &&
															large.map((dog, i) => (
																<li key={i}>
																	<Link
																		to={`/category/${dog.name}`}
																		href='Akita'
																	>
																		{dog.name}
																	</Link>
																</li>
															))}
													</ul>
												</div>
											</li>
											<li className='category-item none' onClick={subDropdown}>
												<div className='flex items-center category__header'>
													<span className='category-name'>Small Dog</span>
													<IoMdArrowDropup
														className={`arrow-icon ${
															subCategoryMenu ? '' : 'rotate-180'
														} transition-all`}
													/>
												</div>
												<div className='sub-category-menu'>
													<ul className='sub-category-list'>
														{small &&
															small.map((dog, i) => (
																<li key={i}>
																	<Link
																		to={`/category/${dog.name}`}
																		href='Akita'
																	>
																		{dog.name}
																	</Link>
																</li>
															))}
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
							)}
						</li>
						<li className='nav_link'>
							<Link to='/about' href='About'>
								{t('nav_about')}
							</Link>
						</li>
						<li className='nav_link'>
							<Link to='/' href='Contact'>
								{t('nav_contact')}
							</Link>
						</li>
					</ul>
				</nav>
				<motion.div className='header__from_info flex items-center'>
					<form className='header__form flex items-center mr-[14px]'>
						<FiSearch
							className='header__form_img'
							onClick={() => setSearchForm((prev) => !prev)}
						/>
						<input
							type='text'
							className='header__input'
							onChange={(e) => {
								dispatch(setFilterName(e.target.value))
								dispatch(setFilterSearch(dogs))
							}}
							placeholder={t('nav_input')}
						/>
					</form>
					<button className='header__button'>{t('nav_button')}</button>
				</motion.div>
				<motion.div
					className={`header__lang ${
						burger ? `lang_show` : ``
					} flex flex-col relative`}
				>
					<motion.div className='flex items-center'>
						<img
							className='mr-[8px]'
							src={`img/icons/${langCheck}.svg`}
							alt=''
						/>
						<h2 href='lang' className='lang__title Med16'>
							{langCheck}
						</h2>
						<MdOutlineKeyboardArrowDown
							className='lang__button cursor-pointer'
							onClick={toggleLangMenu}
						/>
					</motion.div>
					<motion.div
						className={`lang_drop Med16 ${langMenu ? 'show' : ''}`}
						style={{opacity: langMenu ? 1 : 0}}
					>
						<h2 onClick={chooseLang} data-value='USA' className='drop__title'>
							USA
						</h2>
						<h2 onClick={chooseLang} data-value='VNT' className='drop__title'>
							VNT
						</h2>
						<h2 onClick={chooseLang} data-value='RUS' className='drop__title'>
							RUS
						</h2>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	)
}

export default NavMenu
