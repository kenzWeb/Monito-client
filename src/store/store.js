import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {api} from './api/api'
import { filterSlice } from '../components/features/slices/filterSlice.jsx'

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	FilterProducts: filterSlice.reducer

})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})
