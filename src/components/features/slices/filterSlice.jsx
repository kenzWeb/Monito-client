import {createSlice} from '@reduxjs/toolkit'

export const filterSlice = createSlice({
	name: 'FilterProducts',
	initialState: {
		filterName: '',
		filteredData: [],
		filtred: [],
	},
	reducers: {
		setFilterName: (state, action) => {
			state.filterName = action.payload
		},
		setFilterSearch: (state, action) => {
			const payload = action.payload || []
			if (state.filtred.length === 0) {
				state.filteredData = payload.filter((item) =>
					item.name.toLowerCase().includes(state.filterName.toLowerCase()),
				)
			} else {
				state.filtred = payload.filter((item) =>
					item.name.toLowerCase().includes(state.filterName.toLowerCase()),
				)
			}
		},
		setFilterGender: (state, {payload}) => {
			if (payload.gender?.length === 0) {
				state.filtred = []
			} else {
				state.filtred = state.filteredData.filter((gender) =>
					payload.gender?.includes(gender.gender),
				)
			}
		},
	},
})

export const {
	setFilterName,
	setFilterSearch,
	setSearch,
	setFilterGender,
	setFilterColor,
} = filterSlice.actions
export default filterSlice.reducer
