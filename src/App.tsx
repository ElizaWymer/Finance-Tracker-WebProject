import { useState } from "react";
import Alert from "./components/Alert";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [alertVisable, setAlertVisability] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisability(false)}>
          The world is ending!!!
        </Alert>
      )}
      <ButtonComponent
        buttonClicked={() => setAlertVisability(true)}
        colour="danger"
        outline="dark"
        size="lg"
      >
        Big Red Button of Doom
      </ButtonComponent>
    </div>
  );
}

export default App;
