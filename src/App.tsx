import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div>
      <ButtonComponent
        buttonClicked={() => console.log("Clicked")}
        colour="success"
        outline="dark"
        size="sm"
      >
        'Lil
      </ButtonComponent>

      <ButtonComponent
        buttonClicked={() => console.log("Clicked")}
        colour="warning"
        outline="dark"
      >
        Regular
      </ButtonComponent>

      <ButtonComponent
        buttonClicked={() => console.log("Clicked")}
        colour="danger"
        outline="dark"
        size="lg"
      >
        Big
      </ButtonComponent>

      <ButtonComponent
        buttonClicked={() => console.log("Clicked")}
        colour="primary"
        outline="dark"
        gridshit="d-grid gap-2 col-3 mx-auto"
      >
        Enabled & Gridded
      </ButtonComponent>

      <ButtonComponent
        buttonClicked={() => console.log("Clicked")}
        colour="primary"
        outline="dark"
        gridshit="d-grid gap-2 col-3 mx-auto"
        disable={true}
      >
        Disabled & Gridded
      </ButtonComponent>
    </div>
  );
}

export default App;
