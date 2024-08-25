import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 15 },
      { id: 2, title: "Product 2", quantity: 7 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: (item.quantity -= 1) } : item
      ),
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      ></button>
      Item quanity: {cart.items[0].quantity}
    </div>
  );
}

export default App;
