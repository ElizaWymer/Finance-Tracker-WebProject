import { useState } from "react";
import ExpenseList from "./Expense Tracker/Components/ExpenseTable";
import ExpenseFilter from "./Expense Tracker/Components/ExpenseFilter";
import ExpenseForm from "./Expense Tracker/Components/ExpenseForm";
import categories from "./Expense Tracker/categories";

function App() {
  const [expenses, setExpense] = useState([
    { id: 1, description: "Garlic Bread", price: 10, category: "Groceries" },
    {
      id: 2,
      description: "Into the Spider-Verse DVD",
      price: 12.5,
      category: "Entertainment",
    },
    { id: 3, description: "Chicken", price: 4, category: "Groceries" },
    {
      id: 4,
      description: "Alien Isolation",
      price: 9.7483,
      category: "Entertainment",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visableExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-4">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
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
