import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({ name: "Hot Chocolate", price: 3 });

  const handleClick = () => {
    setDrink({
      ...drink,
      //price: 3.75,
      price: drink.price + 1,
    });
  };

  return (
    <div>
      {drink.name}: £{drink.price}
      <br></br> <br></br>
      <button onClick={handleClick}> Equate for Inflation</button>
    </div>
  );
}

export default App;
