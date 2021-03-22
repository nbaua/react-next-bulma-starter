import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetFilteredArts } from '../../app-demo-data'
import ArtList from '../../components/art-list'
import { ThemeProvider } from './../../app-context'

export default function ArtFilteredPage() {
	const router = useRouter()
	const pageSize = 6
	const [artRecordCount, setArtRecordCount] = useState([])
	const [artRecords, setArtRecords] = useState([])

	useEffect(() => {
		if (router.asPath !== router.route) {
			const year = router.query.filter[1]
			const month = router.query.filter[0]
			const pageFilter = { year, month }
			const records = GetFilteredArts(pageFilter)
			if (records != undefined) {
				setArtRecords(records)
			}
		}
	}, [router])

	return (
		<ThemeProvider>
			<div>
				<p>&nbsp;</p>
				<div className='container is-max-fluid is-centered'>
					<div className='columns is-mobile is-multiline'>
						<ArtList data={artRecords} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}
