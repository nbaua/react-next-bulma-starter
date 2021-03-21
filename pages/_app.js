import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	let [isModal, setIsModal] = useState(false)
	const handleClick = () => {
		setIsModal((isModal = !isModal))
	}

	const active = isModal ? 'is-active' : ''
	return (
		<section>
			<div className={`modal ${active}`}>
				<div className='modal-background' />
				<div className='modal-card'>
					<header className='modal-card-head'>
						<p className='modal-card-title'>Real Art - V1</p>
						<button onClick={handleClick} className='delete' aria-label='close' />
					</header>
					<section className='modal-card-body'>
						<div className='field'>
							<label className='checkbox'>This app is created using React library and awesome NextJS framework on top of it. Some seasoning of Bulma CSS adds a UI enhancement like a cherry on top. Feel free to use as you please.</label>
							<div className='control mt-5'>Created by Nhilesh Baua, India</div>
						</div>
					</section>
					<footer className='modal-card-foot'>
						<button onClick={handleClick} className='button is-primary'>
							Thanks
						</button>
					</footer>
				</div>
			</div>

			<header>
				<nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
					<input type='checkbox' id='toggler' role='button' className='toggler' aria-label='menu' aria-expanded='false' data-target='mainBar' />
					<div className='navbar-brand'>
						<a className='navbar-item' href='/'>
							<Image src='/logo.svg' width='129' height='36' />
						</a>

						<label className='navbar-burger burger'>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</label>
					</div>

					<div id='mainBar' className='navbar-menu'>
						<div className='navbar-start'>
							<a className='navbar-item' href='/'>
								Home
							</a>

							<Link href='/arts'>
								<a className='navbar-item'>Favorite Arts</a>
							</Link>

							<div className='navbar-item has-dropdown is-hoverable'>
								<a className='navbar-link'>More</a>

								<div className='navbar-dropdown'>
									<a className='navbar-item' onClick={handleClick}>
										About
									</a>
									<hr className='navbar-divider' />
									<a className='navbar-item'>React-NextJS-Bulma Demo</a>
									<a className='navbar-item'>Created By Nhilesh Baua</a>
								</div>
							</div>
						</div>

						<div className='navbar-end'>
							<div className='navbar-item'>
								<div className='buttons'>
									<a className='button is-dark' onClick={handleClick}>
										About
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<Component {...pageProps} />
		</section>
	)
}

export default MyApp
