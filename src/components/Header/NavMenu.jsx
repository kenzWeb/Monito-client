import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import '../../styles/base/base.scss'
import SearchDrop from './SearchDrop'

const NavMenu = () => {
	const [langMenu, setLangMenu] = useState(false)
	let [langCheck, setLangCheck] = useState('USA')
	const {t, i18n} = useTranslation()
	const [burger, setBurger] = useState(false)
	const [searchForm, setSearchForm] = useState(false)
	const pageHeight = document.documentElement.scrollHeight
	const pageWidth = document.documentElement.scrollWidth

	useEffect(() => {
		i18n.changeLanguage(langCheck)
	}, [langCheck])

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

	return (
		<>
			{searchForm && <SearchDrop />}
			<div className='header flex items-center justify-between'>
				<div
					className='header__burger'
					onClick={() => setBurger((prev) => !prev)}
				>
					<img className='cursor-pointer' src='img/icons/h_menu.svg' alt='' />
				</div>
				<div className='header_logo'>
					<img src='img/logos/hlogo.svg' alt='logo' />
				</div>
				<nav className={`header__navigation ${burger ? 'vis' : ''}`}>
					<ul className='nav_list flex items-center gap-[48px] text-primary_color_dark_blue font-bold leading-[24px]'>
						<a href='Home'>
							<li className='nav_link'>{t('nav_home')}</li>
						</a>
						<a href='Category'>
							<li className='nav_link'>{t('nav_category')}</li>
						</a>
						<a href='About'>
							<li className='nav_link'>{t('nav_about')}</li>
						</a>
						<a href='Contact'>
							<li className='nav_link'>{t('nav_category')}</li>
						</a>
					</ul>
				</nav>
				<div className='header__from_info flex items-center'>
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
				</div>
				<div
					className={`header__lang ${
						burger ? `lang_show` : ``
					} flex flex-col relative`}
				>
					<div className='flex items-center'>
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
					</div>
					<div
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
					</div>
				</div>
			</div>
		</>
	)
}

export default NavMenu
