import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetArtById } from '../../app-demo-data'

export default function ArtDetailsPage(props) {
	const router = useRouter()
	const [artRecord, setArtRecord] = useState({})
	const { id, title, image, date, location, description, views, likes, isFeatured } = artRecord
	const showcaseDate = new Date(date).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })

	useEffect(() => {
		if (router.asPath !== router.route) {
			const artItem = GetArtById(router.query.id)[0]
			if (artItem != undefined) {
				setArtRecord(artItem)
			}
		}
	}, [router])

	function handleTempering() {}

	return (
		<div className='columns is-mobile is-centered'>
			<div className='column is-half mt-6'>
				<div className='card'>
					<header className='card-header'>
						<p className='card-header-title is-unselectable'>{title}</p>
						<button className='button is-light'>
							<Image src={isFeatured === true ? '/images/loved.svg' : '/images/hated.svg'} alt={id} width={24} height={24} />
						</button>
					</header>
					<div className='card-image'>
						<Image className='image is-4by3' src={image === undefined ? '/images/loved.svg' : image} alt={title} width={960} height={600} />
					</div>
					<footer className='card-footer'>
						{id !== undefined && (
							<>
								<div className='card-footer-item column is-narrow'>
									<div className='mr-1 mb-1 has-text-centered is-unselectable'>
										<Image src='/images/views.svg' alt={id} width={24} height={24} />
										<h1 className='is-size-7 is-family-code '>{views}</h1>
									</div>
								</div>
								<div className='card-footer-item column is-narrow'>
									<div className='mr-1 mb-1 has-text-centered is-unselectable'>
										<Image src='/images/likes.svg' alt={id} width={24} height={24} />
										<h1 className='is-size-7 is-family-code'>{likes}</h1>
									</div>
								</div>
								<div className='card-footer-item column is-narrow'>
									<div className='mr-1 mb-1  is-unselectable'>
										<h1 className='is-size-6 is-family-sans-serif'>Shot At: </h1>
										<h1 className='is-size-6 is-family-sans-serif'>{location}</h1>
									</div>
								</div>
								<div className='card-footer-item column is-narrow'>
									<div className='mr-1 mb-1  is-unselectable'>
										<h1 className='is-size-6 is-family-sans-serif'>Listed Since: </h1>
										<h1 className='is-size-6 is-family-sans-serif'>{showcaseDate}</h1>
									</div>
								</div>
							</>
						)}
						<div className='card-footer-item is-size-6 is-family-sans-serif	is-unselectable'>{description !== undefined ? description : 'Sorry folks! did not found your art.'}</div>
					</footer>
				</div>
			</div>
		</div>
	)
}
