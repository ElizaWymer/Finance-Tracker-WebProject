import { useState } from "react";
import ItemTracker from "./components/ItemTracker";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <ItemTracker cartItemsCount={cartItems.length}></ItemTracker>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
