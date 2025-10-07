/**
 * 
 * creating a custom hook with the help of zustand name `useThemeStore`
 * Here the create function help to defibe store with state & action
 * set function is a function used to manipulate the state in the store
 */


import { create } from "zustand";

type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
