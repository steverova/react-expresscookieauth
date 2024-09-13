// Pagination.js
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
	ChevronRightIcon,
	ChevronLeftIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
} from 'lucide-react'
import generateId from '@/plugins'

export function Pagination({
	totalItems,
	itemsPerPage,
	onPageChange,
	initialPage = 1,
}) {
	const [currentPage, setCurrentPage] = useState(initialPage)
	const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage))

	// Calcula el número total de páginas cuando cambia el total de elementos o los elementos por página
	useEffect(() => {
		setTotalPages(Math.ceil(totalItems / itemsPerPage))
	}, [totalItems, itemsPerPage])

	// Notificar al componente padre cuando cambie la página
	useEffect(() => {
		onPageChange(currentPage)
	}, [currentPage, onPageChange])

	const goToPage = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber)
		}
	}

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	return (
		<div className="flex justify-center mt-4 gap-x-1">
			<Button
				size="icon"
				variant="outline"
				onClick={() => goToPage(1)}
				disabled={currentPage === 1}>
				<ChevronsLeftIcon />
			</Button>

			<Button
				size="icon"
				variant="outline"
				onClick={previousPage}
				disabled={currentPage === 1}>
				<ChevronLeftIcon />
			</Button>

			{[...Array(totalPages)].map((_, index) => {
				const pageNum = index + 1
				return (
					<Button
						size="icon"
						variant={currentPage === pageNum ? 'secondary' : 'outline'}
						key={generateId()}
						onClick={() => goToPage(pageNum)}
						className="text-sm rounded">
						{pageNum}
					</Button>
				)
			})}

			<Button
				size="icon"
				variant="outline"
				onClick={nextPage}
				disabled={currentPage === totalPages}>
				<ChevronRightIcon />
			</Button>

			<Button
				size="icon"
				variant="outline"
				onClick={() => goToPage(totalPages)}
				disabled={currentPage === totalPages}>
				<ChevronsRightIcon />
			</Button>
		</div>
	)
}
