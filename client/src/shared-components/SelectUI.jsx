import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function SelectUI({
	options = [{ value: 'this is a value', label: 'Label example' }],
	placeholderText = 'Select a option',
	...props
}) {
	return (
		<Select {...props}>
			<SelectTrigger className='w-[100px]'>
				<SelectValue placeholder={placeholderText} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
