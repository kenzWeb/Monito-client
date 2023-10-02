import React, {Suspense} from 'react'
import '../../i18n.js'
import '../../styles/base/base.scss'
import NavMenu from './NavMenu'

export default function Header() {
	return (
		<header className='pt-[20px]'>
			<div className='header__container'>
				<Suspense fallback={<div>loading...</div>}>
					<NavMenu />
				</Suspense>
			</div>
		</header>
	)
}
