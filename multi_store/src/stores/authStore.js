// src/stores/authStore.js
import { create } from "zustand";
import { useChatStore } from "./chatStore";
import { useDocumentStore } from "./documentStore";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (credentials) => {
    // mock login
    const fakeResponse = {
      user: { id: 1, name: "Seyi" },
      token: "naija-ai-token",
    };

    set({
      user: fakeResponse.user,
      token: fakeResponse.token,
      isAuthenticated: true,
    });
  },

  logout: () => {
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });

    // 🔥 cross-store cleanup
    useChatStore.getState().clearChat();
    useDocumentStore.getState().clearDocuments();
  },

  refreshToken: async () => {
    set({ token: "new-refreshed-token" });
  },
}));
