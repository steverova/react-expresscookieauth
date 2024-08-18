import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  avatar: "",
  active: "",
};

export const useUserStore = create(
  persist(
    (set) => ({
      user: initialState,
      setUser: (user) => set({ user }),
      clearUser: () => {
        set({ user: initialState })
        localStorage.removeItem("user-storage")
      },
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);
