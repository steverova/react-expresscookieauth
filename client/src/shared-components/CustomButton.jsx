import React from 'react'
import { Button } from '@/components/ui/button'
import { RotateCw } from 'lucide-react'

/**
 * CustomButton component for creating customizable buttons with optional icons and loading state.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.text='Button'] - The text to display on the button.
 * @param {'link'|'secondary'|'destructive'|'outline'|'ghost'} [props.variant='primary'] - The variant of the button (e.g., 'primary', 'secondary').
 * @param {boolean} [props.loading=false] - Whether the button is in a loading state.
 * @param {React.ReactElement} [props.startIcon=</>] - The icon to display at the start of the button.
 * @param {React.ReactElement} [props.endIcon=</>] - The icon to display at the end of the button.
 * @param {string} [props.iconSize='h-4 w-4'] - The size class for the icons.
 * @param {string} [props.className] - Additional classes to be applied to the button.
 * @param {boolean} [props.fullWidth=false] - Whether the button should take up the full width of its container
 * @returns {JSX.Element} The rendered button component.
 */
const CustomButton = ({
	text = 'Button',
	loading = false,
	startIcon = null,
	endIcon = null,
	iconSize = '5',
	fullWidth = false,
	children,
	...props
}) => {
	const sizeClass = `h-${iconSize} w-${iconSize}`

	const buttonVariant = props.variant === 'icon' ? 'outline' : props.variant

	return (
		<div>
			<Button
				variant={buttonVariant}
				className={fullWidth && 'w-full'}
				{...props}>
				{loading && <RotateCw className={`mr-2 ${sizeClass} animate-spin`} />}
				{startIcon &&
					React.cloneElement(startIcon, { className: `mr-2 ${sizeClass}` })}
				{props.variant !== 'icon' && text}
				{endIcon &&
					React.cloneElement(endIcon, { className: `ms-2 ${sizeClass}` })}
				{children}
			</Button>
		</div>
	)
}

export default CustomButton
