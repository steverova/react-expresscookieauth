import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from '@/hooks/useAuth'
import ScreenLoader from './ui/screen-loader'
import { useUserStore } from '@/store/useUserStore'

const ProtectedLayout = ({ children }) => {
	const { isAuthenticated } = useAuth()
	const { setAuthenticated, isAuthenticated: isUserAuth } = useUserStore()

	const fetchAuth = async () => {
		const response = await isAuthenticated()
		setAuthenticated(response)
	}

	useEffect(() => {
		fetchAuth()
	}, [])

	if (isUserAuth === null || isUserAuth === undefined) {
		return <ScreenLoader />
	}
	if (isUserAuth === false) {
		return <Navigate to="/" />
	}

	return children ? children : <Outlet />
}

export default ProtectedLayout
