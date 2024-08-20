import { Navigate } from "react-router-dom"
import useAuth from "./useAuth"
import { useEffect, useState } from "react"
import { useAuthStore } from "../store/useAuthStore"

const ProtectedLayout = ({ children }) => {
	const { isAuthenticated } = useAuth()
	const [isAuth, setIsAuth] = useState(null)
	const { setLogged } = useAuthStore()

	const fetchAuth = async () => {
		const response = await isAuthenticated()
		setLogged(response)
		setIsAuth(response)
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchAuth()
	}, [])

	if (isAuth === null) {
		return <div>Loading...</div>
	}

	return isAuth ? children : <Navigate to="/signup" />
}

export default ProtectedLayout
