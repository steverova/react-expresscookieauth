import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const initialState = {
	id: '',
	name: '',
	lastname: '',
	email: '',
	avatar: '',
	active: '',
}

export const useUserStore = create(
	persist(
		(set) => ({
			user: initialState,
			isAuthenticated: null,
			setUser: (user) => set({ user }),
			clearUser: () => {
				set({ user: initialState, isAuthenticated: false })
				localStorage.removeItem('user-storage')
			},
			setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
		}),
		{
			name: 'user-storage', 
			getStorage: () => localStorage,
			partialize: (state) => ({ user: state.user }),
		},
	),
)



