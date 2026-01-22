import { useExpenseStore } from "../store/useExpenseStore";

export default function ExpenseList() {
  const { expenses, removeExpense } = useExpenseStore();

  return (
    <section className="card">
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet.</p>}

      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-row">
            <div>
              <strong>{expense.description}</strong>
              <small>{expense.category}</small>
            </div>

            <div className="amount">
              ₦{expense.amount.toLocaleString()}
              <button onClick={() => removeExpense(expense.id)}>✕</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
