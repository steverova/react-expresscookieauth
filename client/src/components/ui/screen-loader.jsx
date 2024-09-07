export default function ScreenLoader() {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-background-dark'>
			<div className='animate-spin rounded-full border-4 border-primary border-t-transparent dark:border-primary-dark h-12 w-12' />
		</div>
	)
}
