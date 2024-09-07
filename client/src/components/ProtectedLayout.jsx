import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from '@/hooks/useAuth'
import ScreenLoader from './ui/screen-loader'
import { useUserStore } from '@/store/useUserStore'

const ProtectedLayout = ({ children }) => {
	const { isAuthenticated } = useAuth()
	const { setAuthenticated, isAuthenticated: isUserAuth } = useUserStore()

	const fetchAuth = async () => {
		const response = await isAuthenticated();
		console.log('response ==> ', response);
		setAuthenticated(response);
	}

	// const fetchAuth = async () => {
	// 	try {
	// 		const response = await isAuthenticated()
	// 		setAuthenticated(response)
	// 	} catch (error) {
	// 		const errorCode = error.response.status
	// 		if(errorCode === 401) {
	// 			setAuthenticated(false)
	// 		}
	// 	}
	// }

	useEffect(() => {
		fetchAuth()
	}, [])

	console.log('isUserAuth ==> ', isUserAuth)

	if (isUserAuth === null || undefined) {
		return <ScreenLoader />
	}

	if (isUserAuth === false) {
		return <Navigate to='/' replace />
	}

	return children ? children : <Outlet />
}

export default ProtectedLayout
