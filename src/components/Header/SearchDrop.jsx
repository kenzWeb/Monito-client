import React from 'react'

import {useTranslation} from 'react-i18next'

const SearchDrop = () => {
	const {t, i18n} = useTranslation()

	return (
		<form action='' className='drop__form'>
			<input type='text' placeholder={t('nav_input')} className='drop__input'/>
			<button className='drop__button'>search</button>
		</form>
	)
}

export default SearchDrop
