import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Margherita",
    toppings: ["Cheese"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, ", Pepperoni"] });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      ></button>
      {pizza.toppings}
    </div>
  );
}

export default App;
