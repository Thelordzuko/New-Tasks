import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  removeExpense,
  selectExpenses,
  selectTotalSpent,
  selectRemainingBudget,
} from "../features/expenses/expenseSlice";

export default function ExpenseDashboard() {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  const totalSpent = useSelector(selectTotalSpent);
  const remaining = useSelector(selectRemainingBudget);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    dispatch(
      addExpense({
        id: Date.now(),
        description,
        amount: Number(amount),
        category: "General",
        date: new Date().toISOString(),
      })
    );

    setDescription("");
    setAmount("");
  };

  return (
    <div className="dashboard">
      <h1>₦ Expense Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Budget</h3>
          <p>₦500,000</p>
        </div>

        <div className="card spent">
          <h3>Total Spent</h3>
          <p>₦{totalSpent.toLocaleString()}</p>
        </div>

        <div className="card remaining">
          <h3>Remaining</h3>
          <p>₦{remaining.toLocaleString()}</p>
        </div>
      </div>

      <form className="expense-form" onSubmit={handleAdd}>
        <input
          placeholder="Expense description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Expense</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount (₦)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.description}</td>
              <td>{e.amount.toLocaleString()}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => dispatch(removeExpense(e.id))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
