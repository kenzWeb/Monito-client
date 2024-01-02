import {
	useGetLargeQuery,
	useGetPopularQuery,
	useGetSmallQuery,
} from '../../store/api/api'

function useGetDogs() {
	const {data: popular} = useGetPopularQuery()
	const {data: large} = useGetLargeQuery()
	const {data: small} = useGetSmallQuery()

	return {
		popular,
		large,
		small,
	}
}

export default useGetDogs
