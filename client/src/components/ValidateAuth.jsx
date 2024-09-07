import { Navigate } from 'react-router-dom'

import { useUserStore } from '@/store/useUserStore'

const ValidateAuth = ({ children }) => {
	const { user } = useUserStore()

	if (user !== null) return <Navigate to='/page/dashboard' />

	return children
}

export default ValidateAuth
