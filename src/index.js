import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import {store} from './store/store'
import './styles/base/base.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>,
)
