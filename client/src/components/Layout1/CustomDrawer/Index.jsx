import { useState, useEffect } from 'react'
import navLinks from './navLinks'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const CustomDrawer = () => {
	const [openCollapse, setOpenCollapse] = useState(null)

	useEffect(() => {
		const storedOpenCollapse = localStorage.getItem('openCollapse')
		if (storedOpenCollapse) {
			setOpenCollapse(storedOpenCollapse)
		}
	}, [])

	useEffect(() => {
		if (openCollapse !== null) {
			localStorage.setItem('openCollapse', openCollapse)
		}
	}, [openCollapse])

	const handleCollapseToggle = (title) => {
		setOpenCollapse(openCollapse === title ? null : title)
	}

	return (
		<nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
			{navLinks.map((link) => (
				<div key={link.title}>
					<Link
						type='button'
						to={link.url}
						className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer justify-between'
						onClick={(e) => {
							if (link.type === 'collapse') {
								e.preventDefault() // Previene la navegación si es un colapso
								handleCollapseToggle(link.title)
							}
						}}>
						<div className='flex flex-row gap-3'>
							{link.icon}
							{link.title}
						</div>
						{link.type === 'collapse' && (
							<>
								{openCollapse === link.title ? (
									<ChevronUp className='h-6' />
								) : (
									<ChevronDown className='h-6' />
								)}
							</>
						)}
					</Link>
					{link.type === 'collapse' && openCollapse === link.title && (
						<div className='ml-6 mt-2 space-y-1'>
							{link.children.map((child) => (
								<Link
									to={child.url}
									key={child.title}
									className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'>
									{child.icon}
									{child.title}
								</Link>
							))}
						</div>
					)}
				</div>
			))}
		</nav>
	)
}

export default CustomDrawer
