import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import loginImage from '../../assets/svg/login.svg'
import CatchaWidget from '@/components/Catcha'
import useAuth from '@/hooks/useAuth'
import { useRef, useState } from 'react'
import { useLoginNotificationsStore } from '@/store/useLoginNotificationsStore'
import { AlertCollapsible } from '@/shared-components/AlertComponenent'
import { CustomInput } from '@/components/ui/customInput'
import { Eye, EyeOff } from 'lucide-react'
import CustomButton from '@/shared-components/CustomButton'

export default function SignIn() {
	const { singUp, validateTurnsTileToken } = useAuth()
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [turnstileToken, setTurnstileToken] = useState(null)
	const catchaWidgetRef = useRef(null)
	const { payload, notify, clear } = useLoginNotificationsStore()

	const [formValues, setFormValues] = useState({
		email: 'steverova0594@gmail.com',
		password: 'Hello$1234',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			const response = await validateTurnsTileToken(turnstileToken)
			if (!response.data.content.success) {
				notify('Validacion invalida, generando una nueva', true, 404)
				setTurnstileToken(null)
				setLoading(false)
				await catchaWidgetRef?.current.resetWidget()
				return
			}
			await singUp(formValues)
			setLoading(false)
		} catch (error) {
			console.error('Error al iniciar sesion ==>', error)
			notify('Error al iniciar sesion', true, 404)
			setLoading(false)
		}
	}

	return (
		<div className='w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
			<div className=' h-screen flex items-center justify-center py-12'>
				<div className='mx-auto grid w-[350px] gap-6'>
					<div className='grid gap-2 text-center'>
						<h1 className='text-3xl font-bold'>Login</h1>
						<p className='text-balance text-muted-foreground'>
							Enter your email below to login to your account
						</p>
					</div>
					<div className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								disabled={!turnstileToken}
								id='email'
								label='Email'
								name='email'
								value={formValues.email}
								onChange={handleChange}
								autoComplete='email'
								autoFocus
								placeholder='m@example.com'
								required
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password'>Password</Label>
								{/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
							</div>
							<CustomInput
								endAdorn={
									<button
										onClick={() => setShowPassword(!showPassword)}
										type='button'>
										{!showPassword ? (
											<Eye size={18} className='text-muted-foreground' />
										) : (
											<EyeOff size={18} className='text-muted-foreground' />
										)}
									</button>
								}
								disabled={!turnstileToken}
								name='password'
								label='Password'
								type={showPassword ? 'text' : 'password'}
								id='password'
								value={formValues.password}
								onChange={handleChange}
								autoComplete='current-password'
								required
							/>
						</div>
						<CatchaWidget ref={catchaWidgetRef} onSuccess={setTurnstileToken} />
						<CustomButton
							text='Login'
							loading={loading}
							onClick={handleSubmit}
							disabled={!turnstileToken}
							type='submit'
							className='w-full'
						/>

						<AlertCollapsible
							isOpen={payload.show}
							description={payload.message}
							handleClose={clear}
						/>

						<Button variant='outline' className='w-full'>
							Login with Google
						</Button>
					</div>
					<div className='mt-4 text-center text-sm'>
						Don&apos;t have an account?{' '}
						{/* <Link href="#" className="underline">
              Sign up
            </Link> */}
					</div>
				</div>
			</div>
			<div className='hidden bg-muted lg:flex justify-center items-center h-full'>
				<img
					src={loginImage}
					alt='Image-placeholder'
					className='h-2/3 w-2/3 dark:brightness-[0.2] dark:grayscale'
				/>
			</div>
		</div>
	)
}
