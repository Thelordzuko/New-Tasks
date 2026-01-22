import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  totalBudget: 500000,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (e) => e.id !== action.payload
      );
    },
    setBudget: (state, action) => {
      state.totalBudget = action.payload;
    },
  },
});

export const { addExpense, removeExpense, setBudget } =
  expenseSlice.actions;

export const selectExpenses = (state) => state.expenses.expenses;

export const selectTotalSpent = (state) =>
  state.expenses.expenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

export const selectRemainingBudget = (state) =>
  state.expenses.totalBudget - selectTotalSpent(state);

export default expenseSlice.reducer;
