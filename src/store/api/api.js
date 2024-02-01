import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl = 'https://monito-server.up.railway.app/api/v1/'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Dogs'],
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),

	endpoints: (builder) => ({
		getProd: builder.query({
			query: () => 'products',
		}),
		getDogs: builder.query({
			query: () => 'dog',
		}),
		getPopular: builder.query({
			query: () => 'dog/popular',
		}),
		getLarge: builder.query({
			query: () => 'dog/large',
		}),
		getSmall: builder.query({
			query: () => 'dog/small',
		}),
	}),
})

export const {
	useGetDogsQuery,
	useGetProdQuery,
	useGetPopularQuery,
	useGetLargeQuery,
	useGetSmallQuery,
} = api
