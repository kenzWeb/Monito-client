import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Useful() {
	return (
		<section className='useful mb-[60px]'>
			<div className='useful__container'>
				<div className='mt-[60px]'>
					<h1 className='text-[#000] text-[16px]'>You already know ?</h1>
					<div className='products__header flex justify-between items-center'>
						<div>
							<div className='products__subtitletext-[#003459] font-bold capitalize'>
								<h2>Useful Pet knowledge</h2>
							</div>
						</div>
						<div>
							<button className='products__header-button'>
								<h2 className='mr-1'>View more</h2>
								<MdKeyboardArrowRight width={40} />
							</button>
						</div>
					</div>
				</div>
				<div className='useful__cards mt-[60px]'>
					<div className='useful__card'>
						<img src='img/images/useful/image 3.jpg' alt='' />
						<button className='useful__card-title Bold10'>
							<h2>Pet knowledge</h2>
						</button>
						<h3 className='useful__card-subtitle Bold16'>
							What is a Pomeranian? How to Identify Pomeranian Dogs
						</h3>
						<h3 className='useful__card-description Med16'>
							The Pomeranian, also known as the Pomeranian (Pom dog), is always
							in the top of the cutest pets. Not only that, the small, lovely,
							smart, friendly, and skillful circus dog breed.
						</h3>
					</div>
					<div className='useful__card'>
						<img src='img/images/useful/image 3-1.jpg' alt='' />
						<button className='useful__card-title Bold10'>
							<h2>Pet knowledge</h2>
						</button>
						<h3 className='useful__card-subtitle Bold16'>Dog Diet You Need To Know</h3>
						<h3 className='useful__card-description Med16'>
							Dividing a dog's diet may seem simple at first, but there are some
							rules you should know so that your dog can easily absorb the
							nutrients in the diet. For those who are just starting to raise
							dogs, especially newborn puppies with relatively weak resistance.
						</h3>
					</div>
					<div className='useful__card'>
						<img src='img/images/useful/image 3-2.jpg' alt='' />
						<button className='useful__card-title Bold10'>
							<h2>Pet knowledge</h2>
						</button>
						<h3 className='useful__card-subtitle Bold16'>
							Why Dogs Bite and Destroy Furniture and How to Prevent It
							Effectively
						</h3>
						<h3 className='useful__card-description Med16'>
							Dog bites are common during development. However, no one wants to
							see their furniture or important items being bitten by a dog.
						</h3>
					</div>
				</div>
			</div>
		</section>
	)
}
