import { updateAppContext, useAppContext } from '../app-context'
import { GetPagination } from '../app-demo-data'
import ArtItem from './art-item'

export default function ArtList(props) {
	const pageSize = 6
	const { activePage } = useAppContext()
	const { lastPage } = updateAppContext()

	const paginatedArt = GetPagination(props.data, activePage, pageSize)
	return paginatedArt.map((art) => <ArtItem key={art.id} data={art} />)
}
