import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitcher = ({ type = 'global' }) => {
	const { setTheme, theme } = useTheme('dark')

	const changeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	const ButtonSwitcher = () => {
		return (
			<Button
				className='ml-auto h-8 w-8'
				onClick={() => changeTheme()}
				variant='outline'
				size='icon'>
				{theme === 'light' ? (
					<Moon className='h-4 w-4' />
				) : (
					<Sun className='h-4 w-4' />
				)}
			</Button>
		)
	}

	return (
		<>
			{type === 'page' ? (
				<ButtonSwitcher />
			) : (
				<div className='fixed top-2/4 right-1 opacity-30 hover:opacity-100'>
					<ButtonSwitcher />
				</div>
			)}
		</>
	)
}

export default ThemeSwitcher
