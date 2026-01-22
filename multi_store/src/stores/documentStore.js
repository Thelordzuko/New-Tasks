// src/stores/documentStore.js
import { create } from "zustand";
import { useUIStore } from "./uiStore";

export const useDocumentStore = create((set) => ({
  documents: [],
  selectedDocument: null,
  isUploading: false,

  uploadDocument: async (file) => {
    set({ isUploading: true });

    const newDoc = {
      id: Date.now(),
      name: file.name || "Untitled Document",
    };

    set((state) => ({
      documents: [...state.documents, newDoc],
      isUploading: false,
    }));

    // 🔔 notify UI
    useUIStore
      .getState()
      .addNotification(`📄 "${newDoc.name}" uploaded successfully`);
  },

  deleteDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
      selectedDocument:
        state.selectedDocument?.id === id ? null : state.selectedDocument,
    })),

  selectDocument: (doc) => set({ selectedDocument: doc }),

  clearDocuments: () =>
    set({
      documents: [],
      selectedDocument: null,
    }),
}));
