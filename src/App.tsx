import { useState } from "react";
import ExpenseList from "./Expense Tracker/ExpenseList";

function App() {
  const [expenses, setExpense] = useState([
    { id: 1, description: "foo", amount: 10, category: "Utilities" },
    { id: 2, description: "bar", amount: 12.5, category: "test" },
    { id: 3, description: "coo", amount: 4, category: "Futilities" },
    { id: 4, description: "dar", amount: 9.7483, category: "notatest" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
