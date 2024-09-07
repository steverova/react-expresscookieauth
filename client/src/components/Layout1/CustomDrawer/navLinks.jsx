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
		],
	},
]

export default navLinks
