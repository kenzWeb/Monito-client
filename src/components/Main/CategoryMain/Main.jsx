import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'
import Poster from './Poster'

export default function Main({name}) {
	return (
		<>
			<section className='category__main'>
				<div className='category__main__container'>
					<div className='category__main-header'>
						<Link to='/' className='category__header-adapter'>
							<span>Home</span>
							<span>
								<MdKeyboardArrowRight />
							</span>
						</Link>
						<h2 className='category__header-adapter'>
							<span>Dog</span>
							<span>
								<MdKeyboardArrowRight />
							</span>
						</h2>
						<h2 className='category__header-adapter'>
							<span>{name}</span>
						</h2>
					</div>
				</div>
				<Poster />
			</section>
		</>
	)
}
