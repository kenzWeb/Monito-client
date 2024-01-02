import {motion} from 'framer-motion'
import React from 'react'
import {Link} from 'react-router-dom'
import useGetDogs from '../hooks/useGetDogs'
import nestedImg from './drop.svg'

export default function NavSubMenu() {
	const {popular, large, small} = useGetDogs()

	const variants = {
		title: {
			open: {
				opacity: 1,
				transition: {
					delay: 0.2,
				},
			},
			closed: {opacity: 0, transition: {duration: 0.6}},
		},
		ul: {
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
		},
		li: {
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
		},
		nested: {
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
		},
	}

	return (
		<>
			<motion.div className='nested' variants={variants.nested}>
				<div className='nested__left'>
					<div className='nested__wrapper'>
						<motion.h2 variants={variants.title} className='Bold16'>
							Popular
						</motion.h2>
						<motion.ul variants={variants.ul} className='nested__list Med14'>
							{popular &&
								popular.map((dog, i) => (
									<motion.li
										variants={variants.li}
										whileHover={{scale: 1.1}}
										whileTap={{scale: 0.95}}
										key={i}
									>
										<Link to={`/category/${dog.name}`}>{dog.name}</Link>
									</motion.li>
								))}
						</motion.ul>
					</div>
					<div className='nested__wrapper'>
						<motion.h2 variants={variants.title} className='Bold16'>
							Large Dog
						</motion.h2>
						<motion.ul variants={variants.ul} className='nested__list Med14'>
							{large &&
								large.map((dog, i) => (
									<motion.li
										variants={variants.li}
										whileHover={{scale: 1.1}}
										whileTap={{scale: 0.95}}
										key={i}
									>
										<Link to={`/category/${dog.name}`}>{dog.name}</Link>
									</motion.li>
								))}
						</motion.ul>
					</div>
					<div className='nested__wrapper'>
						<motion.h2 variants={variants.title} className='Bold16'>
							Small Dog
						</motion.h2>
						<motion.ul variants={variants.ul} className='nested__list Med14'>
							{small &&
								small.map((dog, i) => (
									<motion.li
										variants={variants.li}
										whileHover={{scale: 1.1}}
										whileTap={{scale: 0.95}}
										key={i}
									>
										<Link to={`/category/${dog.name}`}>{dog.name}</Link>
									</motion.li>
								))}
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
					<img src={nestedImg} alt='nested' />
				</motion.div>
			</motion.div>
		</>
	)
}
