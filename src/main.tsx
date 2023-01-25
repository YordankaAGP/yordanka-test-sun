import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import Layout from './pages/Layout'
import Error from './pages/Error'
import Home from './pages/Home'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />} errorElement={<Error />}>
			<Route index element={<Home />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
