import { useRouter } from 'next/router'
import React from 'react'
import { GetDisplayDates } from '../app-demo-data'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const displayDates = GetDisplayDates()
const renderDisplayDate = () => {
	let result = []
	displayDates.map((x) => {
		result.push(
			<option key={x} value={x}>
				{x}
			</option>
		)
	})
	return result
	// return JSON.stringify(displayDates)
}

export default function ArtSearch() {
	const router = useRouter()
	const dropdownRef = React.useRef()

	const searchHandler = (e) => {
		e.preventDefault()
		const dropdownValue = dropdownRef.current.value

		if (dropdownValue !== '-1') {
			router.push(`/arts/${dropdownValue}`)
		}
	}

	return (
		<div className='field has-addons has-addons-right mt-3 is-dark'>
			<p className='control'>
				<span className='select'>
					<select className='has-background-dark has-text-light' ref={dropdownRef}>
						<option value='-1'>Select Date</option>
						{renderDisplayDate()}
					</select>
				</span>
			</p>
			<p className='control'>
				<button className='button is-primary is-flat' onClick={searchHandler}>
					<span className='icon is-large rotate45'>
						<strong style={{ transform: 'scale(1.8) rotate(45deg)' }}>&#9906;</strong>
					</span>
					<span>Find</span>
				</button>
			</p>
		</div>
	)
}
