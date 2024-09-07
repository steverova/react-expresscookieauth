

import axios from 'axios'

const createHttpResponse = (data, status, statusText) => {
	return { data, status, statusText }
}

const useAxiosInstance = () => {
	
	const axiosInstance = axios.create({
		baseURL: 'http://localhost:3002',
		withCredentials: true,
	})

	axiosInstance.interceptors.response.use(
		(response) => {
			const httpResponse = createHttpResponse(
				response.data,
				response.status,
				response.statusText,
			)
			return httpResponse
		},
		(error) => {
			let httpResponse

			if (error.response) {
				httpResponse = createHttpResponse(
					error.response.data,
					error.response.status,
					error.response.statusText || '',
				)
				console.log('Error response received:', httpResponse)
			} else if (error.request) {
				console.error('No response received:', error.request)
				httpResponse = createHttpResponse(null, 0, 'No response received')
			} else {
				console.error('Request error:', error.message)
				httpResponse = createHttpResponse(
					null,
					0,
					'Request configuration error',
				)
			}

			return httpResponse
		},
	)

	return axiosInstance
}

export default useAxiosInstance
