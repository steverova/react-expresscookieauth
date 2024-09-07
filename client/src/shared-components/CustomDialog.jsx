import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

/**
 * `CustomDialog` is a customizable dialog component that displays a modal with dynamic content.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} [props.open=false] - Indicates whether the dialog is open or closed.
 * @param {function} [props.handleClose=() => {}] - Function to handle closing the dialog.
 * @param {string} [props.title='Lorem Ipsum'] - Title of the dialog.
 * @param {string} [props.description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"] - Description of the dialog.
 * @param {React.ReactElement} [props.footer] - Content for the dialog's footer.
 * @param {'sm' | 'md' | 'lg' | 'fullWidth'} [props.size='md'] - Size of the dialog; can be 'sm', 'md', 'lg', or 'fullWidth'.
 * @param {React.ReactElement} [props.children=<></>] - Main content of the dialog.
 *
 * @returns {React.Element} The `CustomDialog` component.
 */
export function CustomDialog({
	soloChildren = false,
	open = false,
	handleClose = () => {},
	title = 'Lorem Ipsum',
	description = 'is simply dummy text',
	footer = <></>,
	size = 'md',
	children = <></>,
}) {
	const sizes = {
		sm: 'sm:max-w-[425px]',
		md: 'sm:max-w-[600px]',
		lg: 'sm:max-w-[800px]',
		fullWidth: 'max-w-screen h-screen',
	}

	return (
		<Dialog open={open} onOpenChange={handleClose} className='z-20'>
			<DialogContent className={sizes[size]}>
				{!soloChildren && (
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
				)}
				<div className='flex flex-col justify-center items-center'>
					{children}
				</div>
				<DialogFooter>{footer}</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
