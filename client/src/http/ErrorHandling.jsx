import { useEffect } from 'react'

import axiosInstance from './axiosInstance'
import useGlobalErrorStore from '@/store/useGlobalErrorStore'
import FramerCollapse from '@/shared-components/FramerCollapse'
import { Button } from '@/components/ui/button'
import { XIcon } from 'lucide-react'
import { useLoginNotificationsStore } from '@/store/useLoginNotificationsStore'

const ErrorHandling = ({ children }) => {
	const { setError, error } = useGlobalErrorStore()
	const { clear } = useLoginNotificationsStore()

	useEffect(() => {
		const interceptor = axiosInstance.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response) {
					setError({
						message: error.response.data.message || 'Error en la solicitud',
						status: error.response.status,
					})
				} else if (error.request) {
					setError({
						message: 'No se recibió respuesta del servidor',
						status: 'No Response',
					})
				} else {
					setError({
						message: error.message,
						status: 'Request Error',
					})
				}
				return Promise.reject(error)
			},
		)
		return () => {
			axiosInstance.interceptors.response.eject(interceptor)
		}
	}, [setError])

	return (
		<>
			<FramerCollapse open={error?.message}>
				{error?.message && (
					<>
						<div className='w-full'>
							<div className='flex bg-red-500 p-4 w-full absolute top-0 left-0 justify-between items-center'>
								<p className='flex-1 text-center text-white'>
									{error?.message}
								</p>
								<div>
									<Button
										onClick={() => {
											setError(null)
											clear()
										}}
										className='ml-4 h-8 w-8 rounded-full'
										variant='ghost'
										size='icon'>
										<XIcon className='h-4 w-4' />
									</Button>
								</div>
							</div>
							<div className='h-1.5 w-full bg-pink-100 overflow-hidden'>
								<div className='animate-progress w-full h-full bg-[#ffffffbb] origin-left-right z-40' />
							</div>
						</div>
					</>
				)}
			</FramerCollapse>

			{children}
		</>
	)
}

export default ErrorHandling
