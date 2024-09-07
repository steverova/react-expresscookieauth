import { CustomDashboard } from '@/components/CustomDashboard/Index'
import { Layout1 } from '@/components/Layout1/Layout1'
import ProtectedLayout from '@/components/ProtectedLayout'

import { BasicDatatable } from '@/shared-components/CustomDataTable/BasicDatatable'
import { Navigate } from 'react-router-dom'

const privateRoutes = [
	{
		path: '/page',
		element: (
			<ProtectedLayout>
				<Layout1 />
			</ProtectedLayout>
		),
		children: [
			{
				index: true,
				element: <Navigate to='dashboard' replace />,
			},
			{
				path: 'dashboard',
				element: <CustomDashboard />,
			},
			{
				path: 'blog',
				element: <div>blog</div>,
			},
			{
				path: 'components',
				children: [
					{
						path: 'table',
						element: <BasicDatatable />,
					},
				],
			},
			{
				path: 'components',
				children: [
					{
						path: 'table/:page',
						element: <BasicDatatable />,
					},
				],
			},
		],
	},
]

export default privateRoutes
