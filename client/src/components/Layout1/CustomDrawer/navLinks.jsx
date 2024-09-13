import { Home, NotebookText, UserRound, Puzzle, Table, Contact } from 'lucide-react'

const navLinks = [
	{
		title: 'Dashboard',
		icon: <Home />,
		url: '/page/dashboard',
		role: 'admin',
	},
	{
		title: 'Blog',
		icon: <NotebookText />,
		url: '/page/blog',
		role: 'admin',
	},
	{
		title: 'Users',
		icon: <UserRound />,
		type: 'collapse',
		role: 'admin',
    children: [
      {
        title: 'Admin',
        icon: <Contact />,
        url: '/page/users/admin',
        role: 'admin'

      }
    ]
	},
	{
		title: 'Components',
		icon: <Puzzle />,
    type: 'collapse',
		role: 'admin',
		children: [
			{
				title: 'Table',
				icon: <Table />,
				url: '/page/components/table',
				role: 'admin',
			},
			{
				title: 'Dialog',
				icon: <Table />,
				url: '/page/components/dialog',
				role: 'admin',
			},
			{
				title: 'Alert',
				icon: <Table />,
				url: '/page/components/alert',
				role: 'admin',
			},
			{
				title: 'File Chooser',
				icon: <Table />,
				url: '/page/components/file-chooser',
				role: 'admin',
			},
			{
				title: 'Blog',
				icon: <Table />,
				type: 'collapse',
				role: 'admin',
				children: [
					{
						title: 'Preview',
						icon: <Table />,
						url: '/page/components/blog/preview',
						role: 'admin',
					},
					{
						title: 'Editor',
						icon: <Table />,
						url: '/page/components/blog/editor',
						role: 'admin',
					},
				],
			}
		],
	},
]

export default navLinks
