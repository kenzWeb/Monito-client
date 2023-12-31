import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Categories from './pages/Category'
import { Home } from './pages/Home'

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='category/:name' element={<Categories />} />
			</Routes>
		</>
	)
}
