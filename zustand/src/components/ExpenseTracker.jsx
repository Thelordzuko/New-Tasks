import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";

export default function ExpenseTracker() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>Expense Tracker</h1>
        <Summary />
      </aside>

      {/* Main content */}
      <main className="main">
        <ExpenseForm />
        <ExpenseList />
      </main>
    </div>
  );
}
