import { useState } from "react";
import ExpenseList from "./Expense Tracker/Components/ExpenseTable";
import ExpenseFilter from "./Expense Tracker/Components/ExpenseFilter";

function App() {
  const [expenses, setExpense] = useState([
    { id: 1, description: "Garlic Bread", amount: 10, category: "Groceries" },
    {
      id: 2,
      description: "Into the Spider-Verse DVD",
      amount: 12.5,
      category: "Entertainment",
    },
    { id: 3, description: "Sledgehammer", amount: 4, category: "Utilities" },
    {
      id: 4,
      description: "Alien Isolation",
      amount: 9.7483,
      category: "Entertainment",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visableExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visableExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
