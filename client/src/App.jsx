import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./app.css"

import Login from "./views/Login"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import ProtectedLayout from "./auth/ProtectedLayout"
import Unauthorized from "./views/Unauthorized"
import Dashboard from "./views/Dashboard"
import NotFound from "./views/NotFound"
import DataTable from "./views/DataTable"
import MainLayout from "./views/MainLayout"
import LoginRedirect from "./views/LoginRedirect"
const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<LoginRedirect>
					<Login />
				</LoginRedirect>
			),
		},
		{
			path: "/unauthorized",
			element: (
				<MainLayout>
					<Unauthorized />
				</MainLayout>
			),
		},
		{
			path: "/signup",
			element: <Login />,
		},
		{
			path: "/dashboard/",
			element: (
				<ProtectedLayout>
					<Outlet />
				</ProtectedLayout>
			),
			children: [
				{
					path: "",
					element: (
						<MainLayout>
							<Dashboard />
						</MainLayout>
					),
				},
				{
					path: "table",
					element: (
						<MainLayout>
							<DataTable />
						</MainLayout>
					),
				},
			],
		},
		{
			path: "*",
			element: <NotFound />,
		},
	])

	return <RouterProvider router={router} />
}

export default App
