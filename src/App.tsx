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
        Button
      </ButtonComponent>
    </div>
  );
}

export default App;
