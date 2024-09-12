import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

const initialState = {
	id: '',
	name: '',
	lastname: '',
	email: '',
	avatar: '',
	active: '',
}

const storage = createJSONStorage(() => localStorage)

export const useUserStore = create(
	persist(
		(set) => ({
			user: initialState,
			isAuthenticated: null,
			setUser: (user) => set({ user }),
			clearUser: () => {
				try {
					set({ user: initialState, isAuthenticated: false })
					localStorage.removeItem('user-storage')
				} catch (error) {
					console.error('Error clearing user data:', error)
				}
			},
			setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
		}),
		{
			name: 'user-storage',
			storage: {
				getItem: (name) => {
					try {
						return storage.getItem(name)
					} catch (error) {
						console.error('Error getting item:', error)
						return null
					}
				},
				setItem: (name, value) => {
					try {
						storage.setItem(name, value)
					} catch (error) {
						console.error('Error setting item:', error)
					}
				},
				removeItem: (name) => {
					try {
						storage.removeItem(name)
					} catch (error) {
						console.error('Error removing item:', error)
					}
				},
			},
		},
	),
)
