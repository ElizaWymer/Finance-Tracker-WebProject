import ButtonComponent from "./components/ButtonComponent/index";
import InputBoxes from "./components/Expense Tracker/InputBoxes";
import Table from "./components/Expense Tracker/Table";

function App() {
  return (
    <div>
      <InputBoxes label="Description" />
      <InputBoxes label="Amount" />
      <InputBoxes label="Category" isDropDown />
      <ButtonComponent
        buttonClicked={() => {
          console.log("Clicked");
        }}
        colour="primary"
        outline=""
      >
        Submit
      </ButtonComponent>
      <InputBoxes isDropDown> All Categories </InputBoxes>
      <Table></Table>
    </div>
  );
}

export default App;
