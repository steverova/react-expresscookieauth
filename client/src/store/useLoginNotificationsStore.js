import { create } from "zustand";

const initialState = {
  show: false,
  type: 200,
  message: "",
};

export const useLoginNotificationsStore = create((set) => ({
  payload: initialState,

  notify: (message, show = false, type = 200) => {
    set(() => ({
      payload: {
        show,
        type,
        message,
      },
    }));
  },

  clear: () => {
    set(() => ({
      payload: initialState,
    }));
  },
}));
