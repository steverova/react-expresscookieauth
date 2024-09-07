import { CircleAlert, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Motion = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.2,
				ease: [0, 0.71, 0.2, 1.01],
			}}>
			{children}
		</motion.div>
	)
}

export function AlertCollapsible({
	icon = <CircleAlert className='h-4 w-4' />,
	title = 'Title!',
	description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .',
	isOpen = true,
	handleClose = () => {},
}) {
	return (
		<Collapsible open={isOpen} className='w-[350px] space-y-2'>
			<CollapsibleTrigger asChild>
				<CollapsibleContent className='space-y-2'>
					<Motion>
						<Alert className='relative '>
							{icon}
							<AlertTitle>{title}!</AlertTitle>
							<AlertDescription>{description}</AlertDescription>
							<div>
								<Button
									onClick={handleClose}
									variant='outline'
									size='5'
									className='absolute top-2 right-2 '>
									<XIcon className='h-4 w-4' />
								</Button>
							</div>
						</Alert>
					</Motion>
				</CollapsibleContent>
			</CollapsibleTrigger>
		</Collapsible>
	)
}
