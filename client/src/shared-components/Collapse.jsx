import { m, LazyMotion, domAnimation } from 'framer-motion'

const Collapse = ({ children, open, rest }) => {
	const animate = {
		transition: { type: 'tween' },
		height: open ? 'auto' : 0,
	}

	return (
		<LazyMotion features={domAnimation} strict>
			<div aria-expanded={open} {...rest}>
				<m.div
					style={{ overflow: 'hidden' }}
					initial={{ height: 0, opacity: 1 }}
					animate={animate}
					exit={{ height: 0, opacity: 1 }}>
					{children}
				</m.div>
			</div>
		</LazyMotion>
	)
}

export default Collapse
