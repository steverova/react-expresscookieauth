import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3002',
	withCredentials: true,
	timeout: 5000,
})

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		console.log('error ==> ', error)
		return Promise.reject(error)
	},
)

export default axiosInstance
