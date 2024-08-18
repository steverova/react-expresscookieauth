import { create } from "zustand";

export const useLoginNotificationsStore = create((set) => ({
  payload: {
    show: false,
    type: 200,
    message: "",
  },

  notify: (message, show = false, type = 200) => {
    set(() => ({
      payload: {
        show,
        type,
        message,
      },
    }));
  },
}));
