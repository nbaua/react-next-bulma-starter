import React, { useEffect } from 'react'
import { updateAppContext, useAppContext } from './../app-context'

export default function Pager(props) {
	const { activePage, lastPage } = useAppContext()
	const { moveFirst, movePrev, moveNext, moveLast, setLastPageHandler } = updateAppContext()
	const isDisabled = lastPage === undefined || lastPage === 0

	useEffect(() => {
		const lp = Math.ceil(props.totalRecords / props.pageSize)
		setLastPageHandler(lp)
	}, [props])

	//className={{'pagination-link', 'is-current'}}
	return (
		<div className='container is-max-fluid is-centered'>
			<nav className='pagination is-small is-centered' role='navigation' aria-label='pagination'>
				<ul className='pagination-list'>
					<li>
						<button onClick={moveFirst} className={`pagination-link`} disabled={isDisabled}>
							<strong>&#10094;&#10094;</strong>
						</button>
					</li>

					<li>
						<button onClick={movePrev} className={`pagination-link`} disabled={isDisabled}>
							<strong>&#10094;</strong>
						</button>
					</li>

					<li>
						<span className='tag is-light'>
							Showing Page <b className='tag is-info is-light'>{isDisabled ? '?' : activePage.toString()}</b> of {lastPage.toString()} Pages{' '}
						</span>
					</li>

					<li>
						<button onClick={moveNext} className={`pagination-link`} disabled={isDisabled}>
							<strong>&#10095;</strong>
						</button>
					</li>

					<li>
						<button onClick={moveLast} className={`pagination-link`} disabled={isDisabled}>
							<strong>&#10095;&#10095;</strong>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
