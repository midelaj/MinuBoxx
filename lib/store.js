import { create } from "zustand";

export const useBusinessStore = create((set) => ({
  businessType: "",
  theme: "earthyWarm", // default theme
  setBusiness: (type, theme) => set({ businessType: type, theme }),
  setTheme: (theme) => set({ theme }),
}));
