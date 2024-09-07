import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function CustomAvatar({ source = '', name = '' }) {
	const fallback = name.substring(0, 2).toUpperCase()
	return (
		<Avatar>
			<AvatarImage src={source} alt={name} />
			<AvatarFallback>{fallback}</AvatarFallback>
		</Avatar>
	)
}
