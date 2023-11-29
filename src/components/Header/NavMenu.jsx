import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {IoMdArrowDropup} from 'react-icons/io'
import '../../styles/base/base.scss'
import SearchDrop from './SearchDrop'

const NavMenu = ({toggleSubCategoryMenu, subCategoryMenu}) => {
	const [langMenu, setLangMenu] = useState(false)
	let [langCheck, setLangCheck] = useState('USA')
	const {t, i18n} = useTranslation()
	const [burger, setBurger] = useState(false)
	const [searchForm, setSearchForm] = useState(false)

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
		console.log(categoryItem)
	}

	return (
		<>
			{searchForm && <SearchDrop />}
			<motion.div className='header flex items-center justify-between'>
				<motion.div
					className='header__burger'
					onClick={() => setBurger((prev) => !prev)}
				>
					<img className='cursor-pointer' src='img/icons/h_menu.svg' alt='' />
				</motion.div>
				<motion.div className='header_logo'>
					<img src='img/logos/hlogo.svg' alt='logo' />
				</motion.div>
				<nav className={`header__navigation ${burger ? 'vis' : ''}`}>
					<ul className='nav_list flex items-center gap-[48px] text-primary_color_dark_blue font-bold leading-[24px]'>
						<li className='nav_link'>
							<a href='Home'>{t('nav_home')}</a>
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
														<li>
															<a href='/'>Yorkshire Terrier</a>
														</li>
														<li>
															<a href='/'>Pug</a>
														</li>
														<li>
															<a href='/'>Cocker Spaniel</a>
														</li>
														<li>
															<a href='/'>Jack Russell Terrier</a>
														</li>
														<li>
															<a href='/'>Beagle</a>
														</li>
														<li>
															<a href='/'>Husky</a>
														</li>
														<li>
															<a href='/'>Samoyed</a>
														</li>
														<li>
															<a href='/'>Labrador</a>
														</li>
														<li>
															<a href='/'>Tosa</a>
														</li>
														<li>
															<a href='/'>Dachshund</a>
														</li>
														<li>
															<a href='/'>French Bulldog</a>
														</li>
														<li>
															<a href='/'>Chihuahua</a>
														</li>
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
														<li>
															<a href='/'>Akita</a>
														</li>
														<li>
															<a href='/'>Alaskan Malamute</a>
														</li>
														<li>
															<a href='/'>Bernese Moutain</a>
														</li>
														<li>
															<a href='/'>Bloodhound</a>
														</li>
														<li>
															<a href='/'>Bullmastiff</a>
														</li>
														<li>
															<a href='/'>Cane Corso</a>
														</li>
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
														<li>
															<a href='/'>Beagle</a>
														</li>
														<li>
															<a href='/'>Boston Terrier</a>
														</li>
														<li>
															<a href='/'>Calm Terrier</a>
														</li>
														<li>
															<a href='/'>Chihuahua</a>
														</li>
														<li>
															<a href='/'>Cocker Spaniel</a>
														</li>
														<li>
															<a href='/'>Cane Corso</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
							)}
						</li>
						<li className='nav_link'>
							<a href='About'>{t('nav_about')}</a>
						</li>
						<li className='nav_link'>
							<a href='Contact'>{t('nav_contact')}</a>
						</li>
					</ul>
				</nav>
				<motion.div className='header__from_info flex items-center'>
					<form className='header__form flex items-center mr-[14px]'>
						<img
							className='header__form_img'
							src='img/icons/h_search.svg'
							alt=''
							onClick={() => setSearchForm((prev) => !prev)}
						/>
						<input
							type='text'
							className='header__input'
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
						<img
							src='img/icons/Caret_Down_SM.svg'
							alt=''
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
