import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    isLogged: false,

    setLogged: (value) => {
      set(() => ({
        isLogged: value,
      }));
    },
  }),{
    name: "loggedState-storage",
    getStorage: () => localStorage,
  })
);
