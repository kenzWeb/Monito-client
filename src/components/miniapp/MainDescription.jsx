import React from 'react'
import {FaRegCirclePlay} from 'react-icons/fa6'

function MainDescription({
	title,
	subtitle,
	desc,
	mtt,
	mtst,
	mtd,
	lhDesc,
	lhSubtitle,
	justifyContent,
}) {
	const styles = {
		title: `${title}`,
		subtitle: `${subtitle}`,
		desc: `${desc}`,
		lhSubtitle: `${lhSubtitle}px`,
		lhDesc: `${lhDesc}px`,
		mtt: `${mtt}px`,
		mtst: `${mtst}px`,
		mtd: `${mtd}px`,
		justifyContent: `${justifyContent}`,
	}

	console.log(styles.justifyContent)
	return (
		<div className='main__header p-[10px]'>
			<div className='main__header-left'>
				<h2 className={`main__header-title ${styles.title} mb-[${mtt}]`}>
					One more friend
				</h2>
				<h3
					className={`main__header-subtitle ${styles.subtitle} mb-[${mtst}] mb-[${styles.lhSubtitle}]`}
				>
					Thousands more fun!
				</h3>
				<p
					className={`main__header-description ${styles.desc} mb-[${mtd}] mb-[${styles.lhDesc}]`}
				>
					Having a pet means you have more joy, a new friend, a happy person who
					will always be with you to have fun. We have 200+ different pets that
					can meet your needs!
				</p>
				<div
					className={`main__buttons ${
						styles.justifyContent === 'end' ? 'justify-end' : 'justify-start'
					}`}
				>
					<button className='main__button-view-intro'>
						<h2 className='mr-[8px]'>View Intro</h2>
						<FaRegCirclePlay />
					</button>
					<button className='main__button-explore-now'>
						<h2>Explore Now</h2>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MainDescription
