import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa6'

function Footer() {
	const {t, i18n} = useTranslation()
	let [langCheck] = useState('USA')

	useEffect(() => {
		i18n.changeLanguage(langCheck)
	}, [langCheck])

	const {register, handleSubmit} = useForm()

	const onSubmit = (data) => {
		alert(`check your email`)
	}

	return (
		<footer>
			<div className='footer__container'>
				<div className='footer__wrapper'>
					<div className='footer__form'>
						<h2 className='footer__form-title Bold24 text-neutral_color_0'>
							Register now so you don't miss our programs
						</h2>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex items-center'
						>
							<input
								placeholder='Enter your Email'
								{...(register('email'),
								{
									required: 'Email is require field!',
								})}
								type='text'
							/>
							<button className='Med16'>Subcribe Now</button>
						</form>
					</div>
					<div className='footer__nav'>
						<nav className={`footer__navigation`}>
							<ul className='footer_nav_list flex items-center gap-[48px] text-primary_color_dark_blue font-bold leading-[24px]'>
								<a href='Home'>
									<li className='footer__nav_link font-medium Med16'>{t('nav_home')}</li>
								</a>
								<a href='Category'>
									<li className='footer__nav_link font-medium Med16'>{t('nav_category')}</li>
								</a>
								<a href='About'>
									<li className='footer__nav_link font-medium Med16'>{t('nav_about')}</li>
								</a>
								<a href='Contact'>
									<li className='footer__nav_link font-medium Med16'>{t('nav_category')}</li>
								</a>
							</ul>
						</nav>
						<div className='footer__social flex items-center gap-5'>
							<FaFacebook size={24} />
							<FaTwitter size={24} />
							<FaInstagram size={24} />
							<FaYoutube size={24} />
						</div>
					</div>
					<div className='footer__political'>
						<h1 className='Med14'>© 2022 Monito. All rights reserved.</h1>
						<img src='img/logos/hlogo.svg' alt='homeLogo' />
						<h1 className='Med14'>Terms of Service Privacy Policy</h1>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
