import { useState, useEffect } from 'react'
import navLinks from './navLinks'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const CustomDrawer = () => {
	const [openCollapses, setOpenCollapses] = useState([])

	useEffect(() => {
		const storedOpenCollapses = JSON.parse(
			localStorage.getItem('openCollapses'),
		)
		if (storedOpenCollapses) {
			setOpenCollapses(storedOpenCollapses)
		}
	}, [])

	useEffect(() => {
		if (openCollapses.length > 0) {
			localStorage.setItem('openCollapses', JSON.stringify(openCollapses))
		}
	}, [openCollapses])

	const handleCollapseToggle = (title) => {
		if (openCollapses.includes(title)) {
			// Si el colapso está abierto, lo removemos
			setOpenCollapses(openCollapses.filter((item) => item !== title))
		} else {
			// Si el colapso está cerrado, lo agregamos
			setOpenCollapses([...openCollapses, title])
		}
	}

	const renderLinks = (links, level = 0) => {
		return links.map((link) => (
			<div key={link.title} className={`ml-${level * 4}`}>
				<Link
					type="button"
					to={link.url}
					className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer justify-between"
					onClick={(e) => {
						if (link.type === 'collapse') {
							e.preventDefault() // Previene la navegación si es un colapso
							handleCollapseToggle(link.title)
						}
					}}>
					<div className="flex flex-row gap-3">
						{link.icon}
						{link.title}
					</div>
					{link.type === 'collapse' && (
						<>
							{openCollapses.includes(link.title) ? (
								<ChevronUp className="h-6" />
							) : (
								<ChevronDown className="h-6" />
							)}
						</>
					)}
				</Link>

				{/* Render recursivo para los children */}
				{link.type === 'collapse' &&
					openCollapses.includes(link.title) &&
					link.children && (
						<div className="ml-6 mt-2 space-y-1">
							{renderLinks(link.children, level + 1)}
						</div>
					)}
			</div>
		))
	}

	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
			{renderLinks(navLinks)}
		</nav>
	)
}

export default CustomDrawer
