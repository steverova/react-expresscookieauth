import { useEffect, useState } from 'react'
import CustomTable from './Table'
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { SelectUI } from '../SelectUI'
import { Pagination } from './Pagination'

export function CustomDataTable({
	columns = [],
	tableData = [],
	tableProps = {
		manualPagination: true,
		itemsPerPage: 10,
		currentPage: 1,
		pageOptions: [5, 10, 15], // Ahora es un array simple de números
	},
}) {
	const [sorting, setSorting] = useState([])
	const [columnFilters, setColumnFilters] = useState([])
	const [columnVisibility, setColumnVisibility] = useState({})
	const [rowSelection, setRowSelection] = useState({})
	const [itemsPerPage, setItemsPerPage] = useState(tableProps.itemsPerPage)
	const [currentPage, setCurrentPage] = useState(tableProps.currentPage)

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
	}, [currentPage, itemsPerPage])

	const table = useReactTable({
		manualPagination: true,
		data: data,
		columns: columns,
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

			<div className="flex flex-row justify-between py-1 items-center">
				<div className="text-sm text-muted-foreground w-2/6 ">
					{table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>

				<Pagination
					totalItems={tableData.length}
					itemsPerPage={itemsPerPage}
					onPageChange={setCurrentPage}
				/>

				<div className="w-2/6 flex justify-end">
					<SelectUI
						defaultValue={itemsPerPage}
						onValueChange={(value) => setItemsPerPage(value)}
						placeholderText="Pages"
						options={tableProps.pageOptions.map(option => ({
							label: option,
							value: option,
						}))}
					/>
				</div>
			</div>
		</>
	)
}
