import { useState } from "react";
import { useExpenseStore } from "../store/useExpenseStore";

export default function ExpenseForm() {
  const addExpense = useExpenseStore((state) => state.addExpense);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    addExpense({
      id: Date.now(),
      description,
      amount: Number(amount),
      category,
      date: new Date().toISOString().split("T")[0],
    });

    setDescription("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <section className="card">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Rent</option>
          <option>Utilities</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}
