import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpenseStore = create(
  persist(
    (set, get) => ({
      expenses: [],
      totalBudget: 500000, // ₦500,000

      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, expense],
        })),

      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter(
            (expense) => expense.id !== id
          ),
        })),

      setBudget: (amount) =>
        set({ totalBudget: amount }),

      getTotalSpent: () =>
        get().expenses.reduce(
          (total, expense) => total + expense.amount,
          0
        ),

      getRemainingBudget: () =>
        get().totalBudget - get().getTotalSpent(),
    }),
    {
      name: "naira-expense-store",
    }
  )
);
