import {motion} from 'framer-motion'
import React, {Suspense, useState} from 'react'
import '../../i18n.js'
import '../../styles/base/base.scss'
import NavMenu from './NavMenu'
import NavSubMenu from './NavSubMenu.jsx'

export default function Header() {
	const [subCategoryMenu, setSubCategoryMenu] = useState(false)
	const toggleSubCategoryMenu = () => {
		setSubCategoryMenu((prev) => !prev)
	}
	return (
		<header className='pt-[20px]'>
			<motion.div
				initial={false}
				animate={subCategoryMenu ? 'open' : 'closed'}
				className='header__container relative'
			>
				<Suspense fallback={<div>loading...</div>}>
					<NavSubMenu />
					<NavMenu
						toggleSubCategoryMenu={toggleSubCategoryMenu}
						subCategoryMenu={subCategoryMenu}
					/>
				</Suspense>
			</motion.div>
		</header>
	)
}
