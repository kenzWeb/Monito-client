import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl = 'https://monito-server-production.up.railway.app/api/v1/'

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
	}),
})

export const {useGetDogsQuery, useGetProdQuery} = api
