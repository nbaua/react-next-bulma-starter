import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ArtItem(props) {
	const { id, title, image, date, location, description, views, likes, isFeatured } = props.data

	const showcaseDate = new Date(date).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })

	return (
		<div className='column is-half-desktop is-one-third-widescreen is-one-third-fullhd'>
			<div className='card'>
				{/* bulma ellipsis not working here*/}
				<header className='card-header'>
					<Link href={`/arts/${id}`}>
						<p className='card-header-title is-unselectable'>{title.length > 40 ? title.toString().substring(0, 36) + '....' : title}</p>
					</Link>
					<button className='button is-light'>
						{/* moved the link on to the title, as the Link and Image both can not be used together without causing runtime warnings*/}
						<Image src={isFeatured === true ? '/images/loved.svg' : '/images/hated.svg'} alt={id} width={24} height={24} />
					</button>
				</header>
				<div className='card-image'>
					<Image className='image is-4by3' src={image} alt={title} width={500} height={300} />
				</div>
				<footer className='card-footer'>
					<div className='card-footer-item column is-narrow'>
						<div className='mr-1 mb-1 has-text-centered is-unselectable'>
							<Image src='/images/views.svg' alt={id} width={16} height={16} />
							<h1 className='is-size-7 is-family-code '>{views}</h1>
						</div>
					</div>
					<div className='card-footer-item column is-narrow'>
						<div className='mr-1 mb-1 has-text-centered is-unselectable'>
							<Image src='/images/likes.svg' alt={id} width={16} height={16} />
							<h1 className='is-size-7 is-family-code'>{likes}</h1>
						</div>
					</div>
					<div className='card-footer-item is-size-7 is-family-sans-serif	has-text-right is-unselectable'>{description}</div>
				</footer>
			</div>
		</div>
	)
}
