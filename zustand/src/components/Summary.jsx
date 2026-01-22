import { useExpenseStore } from "../store/useExpenseStore";

export default function Summary() {
  const {
    totalBudget,
    getTotalSpent,
    getRemainingBudget,
  } = useExpenseStore();

  return (
    <div className="summary-card">
      <div>
        <h3>Budget</h3>
        <p>₦{totalBudget.toLocaleString()}</p>
      </div>

      <div>
        <h3>Spent</h3>
        <p>₦{getTotalSpent().toLocaleString()}</p>
      </div>

      <div>
        <h3>Remaining</h3>
        <p className="remaining">
          ₦{getRemainingBudget().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
