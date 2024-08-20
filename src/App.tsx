import Message from "./Message";
import ListGroup from "./components/ListGroup/index";

function App() {
  let fruits = ["Apples", "Bananas", "Cherrys", "Durians", "Strawberries"];
  //fruits = [];
  //let cities = ["Leeds", "Wakefield", "Huddersfield"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message />{" "}
      <ListGroup
        items={fruits}
        heading="Fruit Bowl"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
