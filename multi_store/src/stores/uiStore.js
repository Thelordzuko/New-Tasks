// src/stores/uiStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUIStore = create(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: "light",
      notifications: [],

      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      setTheme: (theme) => set({ theme }),

      addNotification: (message) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            { id: Date.now(), message },
          ],
        })),
    }),
    {
      name: "naija-ai-ui", // localStorage key
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
