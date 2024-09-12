import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function TablePagination({ pages, ...props }) {
	const location = useLocation()
	const navigate = useNavigate()
	const path = location.pathname
	const searchParams = new URLSearchParams(location.search)
	const currentPage = Number.parseInt(searchParams.get('page')) || 1

	const [isActive, setIsActive] = useState(() => {
		const savedPage = localStorage.getItem('page')
		return savedPage ? Number.parseInt(savedPage, 10) : 1
	})

	useEffect(() => {
		localStorage.setItem('page', isActive)
		return () => {
			localStorage.removeItem('page')
		}
	}, [isActive])

	return (
		<Pagination {...props}>
			<PaginationContent>
				<PaginationItem
					className='cursor-pointer'
					onClick={() => {
						if (currentPage > 1) {
							setIsActive(currentPage - 1)
							navigate(`${path}?page=${currentPage - 1}`)
						}
					}}>
					<PaginationPrevious />
				</PaginationItem>

				{Array.from({ length: pages }).map((page, index) => (
					<PaginationItem
						className='cursor-pointer'
						onClick={() => {
							setIsActive(index + 1)
							navigate(`${path}?page=${index + 1}`)
						}}
						key={page}>
						<PaginationLink isActive={isActive === index + 1}>
							{index + 1}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem
					className='cursor-pointer'
					onClick={() => {
						if (currentPage < pages) {
							setIsActive(currentPage + 1)
							navigate(`${path}?page=${currentPage + 1}`)
						}
					}}>
					<PaginationNext />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
