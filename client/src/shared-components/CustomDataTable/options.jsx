import { SortAsc, EllipsisVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const tableData = [
	{
		email: 'example1@example.com',
		amount: '100.00',
		status: 'success',
		id: 'V1b1g9G5S',
	},
	{
		email: 'example2@example.com',
		amount: '200.00',
		status: 'pending',
		id: 'S9f2e8H3N',
	},
	{
		email: 'example3@example.com',
		amount: '150.00',
		status: 'processing',
		id: 'G4h3j6F2R',
	},
	{
		email: 'example4@example.com',
		amount: '250.00',
		status: 'success',
		id: 'N2k4l1D8T',
	},
	{
		email: 'example5@example.com',
		amount: '300.00',
		status: 'pending',
		id: 'D8m5n2C7Q',
	},
	{
		email: 'example6@example.com',
		amount: '350.00',
		status: 'processing',
		id: 'H5p6o3B1W',
	},
	{
		email: 'example7@example.com',
		amount: '400.00',
		status: 'success',
		id: 'J1q7r4A9Z',
	},
	{
		email: 'example8@example.com',
		amount: '450.00',
		status: 'pending',
		id: 'K3s8t5C6Y',
	},
	{
		email: 'example9@example.com',
		amount: '500.00',
		status: 'processing',
		id: 'L2u9v7D4X',
	},
	{
		email: 'example10@example.com',
		amount: '550.00',
		status: 'success',
		id: 'M8w1x8E2V',
	},
	{
		email: 'example11@example.com',
		amount: '600.00',
		status: 'pending',
		id: 'P5y2z9F3U',
	},
	{
		email: 'example12@example.com',
		amount: '650.00',
		status: 'processing',
		id: 'Q6z3a1G5T',
	},
	{
		email: 'example13@example.com',
		amount: '700.00',
		status: 'success',
		id: 'R4b5c2H1S',
	},
	{
		email: 'example14@example.com',
		amount: '750.00',
		status: 'pending',
		id: 'S7d6e3J8R',
	},
	{
		email: 'example15@example.com',
		amount: '800.00',
		status: 'processing',
		id: 'T9f8g4K2Q',
	},
	{
		email: 'example16@example.com',
		amount: '850.00',
		status: 'success',
		id: 'U1h1i5L6P',
	},
	{
		email: 'example17@example.com',
		amount: '900.00',
		status: 'pending',
		id: 'V2j2k6M3O',
	},
	{
		email: 'example18@example.com',
		amount: '950.00',
		status: 'processing',
		id: 'W3l3m7N1N',
	},
	{
		email: 'example19@example.com',
		amount: '1000.00',
		status: 'success',
		id: 'X4n4o8P5M',
	},
	{
		email: 'example20@example.com',
		amount: '1100.00',
		status: 'pending',
		id: 'Y5p5q9Q2L',
	},
	{
		email: 'example21@example.com',
		amount: '1200.00',
		status: 'processing',
		id: 'Z6r6s1R3K',
	},
	{
		email: 'example22@example.com',
		amount: '1300.00',
		status: 'success',
		id: 'A7t7u2S8J',
	},
	{
		email: 'example23@example.com',
		amount: '1400.00',
		status: 'pending',
		id: 'B8v8w3T5I',
	},
	{
		email: 'example24@example.com',
		amount: '1500.00',
		status: 'processing',
		id: 'C9x9y4U2H',
	},
	{
		email: 'example25@example.com',
		amount: '1600.00',
		status: 'success',
		id: 'D1z1a5V6G',
	},
	{
		email: 'example26@example.com',
		amount: '1700.00',
		status: 'pending',
		id: 'E2a2b6W3F',
	},
	{
		email: 'example27@example.com',
		amount: '1800.00',
		status: 'processing',
		id: 'F3c3d7X1E',
	},
	{
		email: 'example28@example.com',
		amount: '1900.00',
		status: 'success',
		id: 'G4e4f8Y5D',
	},
	{
		email: 'example29@example.com',
		amount: '2000.00',
		status: 'pending',
		id: 'H5g5h9Z2C',
	},
	{
		email: 'example30@example.com',
		amount: '2100.00',
		status: 'processing',
		id: 'I6i6j1A3B',
	},
]

export const columns = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},

	{
		accessorKey: 'email',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Email
					<SortAsc className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>,
		filter: true
	},
	{
		accessorKey: 'amount',
		header: () => <div>Amount</div>,
		cell: ({ row }) => {
			const amount = Number.parseFloat(row?.getValue('amount'))

			// Format the amount as a dollar amount
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(amount)

			return <div className='font-medium'>{formatted}</div>
		},
		filter: true
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status = row.getValue('status')
			return (
				<div>
					<span
						className={`${
							status === 'success'
								? 'text-green-800 bg-green-200 '
								: status === 'processing'
									? 'text-orange-800 bg-orange-200'
									: 'text-red-800 bg-red-200'
						} capitalize rounded-lg px-2 font-semibold`}>
						{status}
					</span>
				</div>
			)
		},
	},
	{
		id: 'actions',
		accessorKey: 'Actions',
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<EllipsisVertical className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}>
							Copy payment ID
						</DropdownMenuItem>
						
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
