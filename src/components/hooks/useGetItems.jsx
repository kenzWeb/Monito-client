import {useGetDogsQuery, useGetProdQuery} from '../../../store/api/api'

function useGetItems() {
	const {data: dogs} = useGetDogsQuery()
	const {data: prod} = useGetProdQuery()

	return {
		dogs,
		prod,
	}
}

export default useGetItems
