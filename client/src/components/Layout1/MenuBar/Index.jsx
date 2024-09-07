import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useAuth from '@/hooks/useAuth'
import { CustomAvatar } from '@/shared-components/CustomAvatar'
import { useUserStore } from '@/store/useUserStore'
import { LogOut } from 'lucide-react'

const MenuBar = () => {
	const { logOut } = useAuth()
	const { user } = useUserStore()

	const handleLogout = async () => {
		localStorage.clear()
		await logOut()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex flex-row gap-x-6 items-center'>
					<p>{`${user.name} ${user.lastname}`}</p>
					<Button
						variant='secondary'
						size='icon'
						className='rounded-full flex flex-row'>
						<CustomAvatar source={user.avatar} name={user.name} />
						<span className='sr-only'>Toggle user menu</span>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className='gap-x-2 cursor-pointer hover:opacity-90' onClick={() => handleLogout()}>
					<LogOut className='h-5 w-5' /> Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default MenuBar
