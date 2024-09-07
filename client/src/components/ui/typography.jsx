import classNames from 'classnames'

const TYPOGRAPHY_STYLES = {
	h1: 'text-4xl lg:text-5xl font-extrabold tracking-tight scroll-m-20',
	h2: 'text-3xl lg:text-4xl font-bold tracking-tight scroll-m-20',
	h3: 'text-2xl lg:text-3xl font-semibold tracking-tight scroll-m-20',
	h4: 'text-xl lg:text-2xl font-medium tracking-tight scroll-m-20',
	h5: 'text-lg lg:text-xl font-medium tracking-tight scroll-m-20',
	h6: 'text-base lg:text-lg font-medium tracking-tight scroll-m-20',
	blockquote: 'border-l-4 pl-4 italic text-gray-600',
	small: 'text-sm font-light text-gray-500',
	muted: 'text-sm text-gray-400',
}

/**
 * Typography component for rendering dynamic headings, blockquote, small, and muted text.
 *
 * @param {Object} props - The properties object.
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'blockquote'|'small'|'muted'|'p'} [props.variant='p'] - The HTML element to render.
 * @param {React.ReactNode} props.children - The content to be displayed inside the typography element.
 * @param {string} [props.className] - Additional classes to be applied to the element.
 * @returns {JSX.Element} The rendered typography element.
 */
export function Typography({ variant = 'p', children, className, ...props }) {
	const Component = variant
	const classes = classNames(TYPOGRAPHY_STYLES[variant], className)

	return (
		<Component className={classes} {...props}>
			{children}
		</Component>
	)
}
