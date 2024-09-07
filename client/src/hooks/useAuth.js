import { useNavigate } from 'react-router-dom'
import { useLoginNotificationsStore } from '../store/useLoginNotificationsStore'
import { useUserStore } from '../store/useUserStore'
import http from '@/http'

const useAuth = () => {
	const navigate = useNavigate()
	const { notify } = useLoginNotificationsStore()
	const { setUser } = useUserStore()

	const singUp = async ({ email, password }) => {
		const response = await http.post('/auth/login', {
			email,
			password,
		})

		if (response.status === 200) {
			setUser(response.data.content)
			navigate('/page/dashboard')
		}

		if (response.status === 404) {
			notify('Usuario no encontrado', true, 404)
		}

		if (response.status === 401) {
			navigate('/')
		}
		return response
	}

	const logOut = async () => {
		localStorage.clear()
		const response = await http.post('/auth/logout')
		if (response.status === 200 && response.data.message === 'LOGOUT_SUCCESS') {
			navigate('/')
		}
	}

	const isAuthenticated = async () => {
		try {
			const response = await http.get('/auth/protected')
			return response.data.authorized
		} catch (error) {
			const errorCode = error.response.status
			if (errorCode === 401) {
				return false
			}
		}
	}

	const validateTurnsTileToken = async (turnstileToken) => {
		const response = await http.post('/auth/verify-turnstile-token', {
			turnstileToken,
		})
		return response
	}

	return { singUp, logOut, isAuthenticated, validateTurnsTileToken }
}

export default useAuth
