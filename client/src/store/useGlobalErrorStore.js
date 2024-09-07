import { create } from 'zustand';

const useGlobalErrorStore = create(set => ({
  error: null,
  setError: (error) => set({ error }),
  clearError: () => set({ error: null, showAlert: false }),
}));

export default useGlobalErrorStore;
