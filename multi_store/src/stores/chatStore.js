// src/stores/chatStore.js
import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  isAgentTyping: false,

  sendQuery: async (query) => {
    set((state) => ({
      messages: [...state.messages, { role: "user", text: query }],
      isAgentTyping: true,
    }));

    // mock AI delay
    setTimeout(() => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            role: "assistant",
            text: "This document relates to Nigerian policy compliance 🇳🇬",
          },
        ],
        isAgentTyping: false,
      }));
    }, 1000);
  },

  clearChat: () =>
    set({
      messages: [],
      isAgentTyping: false,
    }),
}));
