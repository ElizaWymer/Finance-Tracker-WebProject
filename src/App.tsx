import { useState } from "react";
import produce from "immer";

function App() {
  const [customer, setCustomer] = useState({
    name: "Elizabeth",
    address: { city: "Huddersfield", postcode: "HD1" },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, postcode: "HD2" },
    });
  };

  return (
    <div>
      {customer.name}'s' Postcode: {customer.address.postcode}
      <br></br> <br></br>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Update Postcode
      </button>
    </div>
  );
}

export default App;
