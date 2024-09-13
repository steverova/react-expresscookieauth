import { CustomDashboard } from '@/components/CustomDashboard/Index'
import { Layout1 } from '@/components/Layout1/Layout1'
import ProtectedLayout from '@/components/ProtectedLayout'
import BlogView from '@/shared-components/BlogView'

import { BasicDatatable } from '@/shared-components/CustomDataTable/BasicDatatable'
import FileChooser from '@/shared-components/FileChooser/FileChooser'
import GradientBackground from '@/shared-components/GradientBackground'
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
				element: <Navigate to="dashboard" replace />,
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
					{
						path: 'table/:page',
						element: <BasicDatatable />,
					},
					{
						path: 'dialog',
						element: <div>dialogs</div>,
					},
					{
						path: 'alert',
						element: <div>Alert</div>,
					},
					{
						path: 'blog/preview',
						element: (
							<div className="">
								<GradientBackground>
									<BlogView />
								</GradientBackground>
							</div>
						),
					},
					{
						path: 'file-chooser',
						element: (
							<div className="py-12 flex flex-row justify-center">
								<FileChooser />
							</div>
						),
					},
				],
			},
			// {
			// 	path: 'components',
			// 	children: [
			// 		{
			// 			path: 'table/:page',
			// 			element: <BasicDatatable />,
			// 		},
			// 	],
			// },
		],
	},
]

export default privateRoutes
