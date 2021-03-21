import React, { useEffect, useState } from 'react'
import { GetFeaturedArts } from '../../app-demo-data'
import ArtList from '../../components/art-list'
import Pager from '../../components/pager'
import { ThemeProvider } from './../../app-context'

export default function ArtsPage() {
	const pageSize = 6
	const [artRecordCount, setArtRecordCount] = useState([])
	const [artRecords, setArtRecords] = useState([])

	useEffect(() => {
		const records = GetFeaturedArts()
		setArtRecords(records)
		setArtRecordCount(records.length)
	}, [])

	return (
		<ThemeProvider>
			<div>
				<p>&nbsp;</p>
				<Pager totalRecords={artRecordCount} pageSize={pageSize} />
				<div className='container is-max-fluid is-centered'>
					<div className='columns is-mobile is-multiline'>
						<ArtList data={artRecords} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}
