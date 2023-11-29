import {motion} from 'framer-motion'
import React, {Suspense, useState} from 'react'
import '../../i18n.js'
import '../../styles/base/base.scss'
import NavMenu from './NavMenu'

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
				<motion.div
					className='nested'
					variants={{
						open: {
							clipPath: 'inset(0% 0% 0% 0% round 10px)',
							zIndex: 200,
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.5,
								staggerChildren: 0.07,
								delay: 0.2,
							},
						},
						closed: {
							clipPath: 'inset(10% 50% 90% 50% round 10px)',
							zIndex: -2,
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.6,
							},
						},
					}}
				>
					<div className='nested__left'>
						<div className='nested__wrapper'>
							<motion.h2
								variants={{
									open: {
										opacity: 1,
										transition: {
											delay: 0.2,
										},
									},
									closed: {opacity: 0, transition: {duration: 0.6}},
								}}
								className='Bold16'
							>
								Popular
							</motion.h2>
							<motion.ul
								variants={{
									open: {
										opacity: 1,
										y: 0,
										transition: {
											type: 'spring',
											stiffness: 300,
											damping: 24,
											delay: 0.4,
										},
									},
									closed: {opacity: 0, y: 40, transition: {duration: 0.6}},
								}}
								className='nested__list Med14'
							>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Yorkshire Terrier'>Yorkshire Terrier</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Pug'>Pug</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Cocker Spaniel'>Cocker Spaniel</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Jack Russell Terrier'>Jack Russell Terrier</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Beagle'>Beagle</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Husky'>Husky</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Samoyed'>Samoyed</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Labrador'>Labrador</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Tosa'>Tosa</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Dachshund'>Dachshund</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='French Bulldog'>French Bulldog</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Chihuahua'>Chihuahua</a>
								</motion.li>
							</motion.ul>
						</div>
						<div className='nested__wrapper'>
							<motion.h2
								variants={{
									open: {
										opacity: 1,
										transition: {
											delay: 0.2,
										},
									},
									closed: {opacity: 0, transition: {duration: 0.6}},
								}}
								className='Bold16'
							>
								Popular
							</motion.h2>
							<motion.ul
								variants={{
									open: {
										opacity: 1,
										y: 0,
										transition: {
											type: 'spring',
											stiffness: 300,
											damping: 24,
											delay: 0.4,
										},
									},
									closed: {opacity: 0, y: 40, transition: {duration: 0.6}},
								}}
								className='nested__list Med14'
							>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Akita'>Akita</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Alaskan Malamute'>Alaskan Malamute</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Bernese Moutain'>Bernese Moutain</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Bloodhound'>Bloodhound</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Bullmastiff'>Bullmastiff</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Cane Corso'>Cane Corso</a>
								</motion.li>
							</motion.ul>
						</div>
						<div className='nested__wrapper'>
							<motion.h2
								variants={{
									open: {
										opacity: 1,
										transition: {
											delay: 0.2,
										},
									},
									closed: {opacity: 0, transition: {duration: 0.6}},
								}}
								className='Bold16'
							>
								Popular
							</motion.h2>
							<motion.ul
								variants={{
									open: {
										opacity: 1,
										y: 0,
										transition: {
											type: 'spring',
											stiffness: 300,
											damping: 24,
											delay: 0.4,
										},
									},
									closed: {opacity: 0, y: 40, transition: {duration: 0.6}},
								}}
								className='nested__list Med14'
							>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Beagle'>Beagle</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Boston Terrier'>Boston Terrier</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Calm Terrier'>Calm Terrier</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Chihuahua'>Chihuahua</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Cocker Spaniel'>Cocker Spaniel</a>
								</motion.li>
								<motion.li
									variants={{
										open: {
											y: 0,
											opacity: 1,
											transition: {
												y: {stiffness: 100, velocity: -100, type: 'spring'},
											},
										},
										closed: {
											y: 50,
											opacity: 0,
											transition: {
												y: {stiffness: 1000},
											},
										},
									}}
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.95}}
								>
									<a href='Dachshund'>Dachshund</a>
								</motion.li>
							</motion.ul>
						</div>
					</div>
					<motion.div
						variants={{
							open: {
								opacity: 1,
								y: 0,
								transition: {
									type: 'spring',
									stiffness: 300,
									damping: 24,
									delay: 0.4,
								},
							},
							closed: {opacity: 0, y: 40, transition: {duration: 0.6}},
						}}
						className='nested__right'
					>
						<img src='img/images/main/drop.svg' alt='nested' />
					</motion.div>
				</motion.div>
				<Suspense fallback={<div>loading...</div>}>
					<NavMenu
						toggleSubCategoryMenu={toggleSubCategoryMenu}
						subCategoryMenu={subCategoryMenu}
					/>
				</Suspense>
			</motion.div>
		</header>
	)
}
