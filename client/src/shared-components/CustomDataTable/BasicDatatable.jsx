import { useEffect, useState } from 'react'
import { columns, tableData } from './options'
import { useLocation } from 'react-router-dom'
import CustomTable from './Table'

import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { TablePagination } from './TablePagination'
import { SelectUI } from '../SelectUI'

export function BasicDatatable() {
	const [sorting, setSorting] = useState([])
	const [columnFilters, setColumnFilters] = useState([])
	const [columnVisibility, setColumnVisibility] = useState({})
	const [rowSelection, setRowSelection] = useState({})
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const currentPage = Number.parseInt(searchParams.get('page')) || 1
	const [pages, setPages] = useState(tableData.length / itemsPerPage)
	const [data, setData] = useState(
		tableData.slice(
			(currentPage - 1) * itemsPerPage,
			currentPage * itemsPerPage,
		),
	)

	useEffect(() => {
		setData(
			tableData.slice(
				(currentPage - 1) * itemsPerPage,
				currentPage * itemsPerPage,
			),
		)
		setPages(Math.ceil(tableData.length / itemsPerPage))
	}, [currentPage, itemsPerPage])

	const table = useReactTable({
		manualPagination: true,
		data: data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	return (
		<>
			<CustomTable table={table} columns={columns} />

			<div className='flex flex-row justify-between py-3 '>
				<div className='text-sm text-muted-foreground w-2/6 '>
					{table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<TablePagination className='w-2/6 ' pages={pages} />
				<div className='w-2/6 flex justify-end  '>
					<SelectUI
					  defaultValue={itemsPerPage}
						onValueChange={(value) => setItemsPerPage(value)}
						placeholderText='Pages'
						options={[
							{
								label: 5,
								value: 5,
							},
							{
								label: 10,
								value: 10,
							},
							{
								label: 15,
								value: 15,
							},
						]}
					/>
				</div>
			</div>
		</>
	)
}
