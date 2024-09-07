import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Index'
import { ThemeProvider } from './components/theme-provider'
import ErrorHandling from './http/ErrorHandling'
import ThemeSwitcher from './shared-components/ThemeSwitcher'

function App() {
	return (
		<ThemeProvider>
			<ErrorHandling>
				<ThemeSwitcher type='global' />
				<RouterProvider router={router} />
			</ErrorHandling>
		</ThemeProvider>
	)
}

export default App
