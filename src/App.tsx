import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let fruits = ["Apples", "Bananas", "Cherrys", "Durians", "Strawberries"];
  //fruits = [];
  let cities = ["Leeds", "Wakefield", "Huddersfield"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message />{" "}
      <ListGroup
        items={cities}
        heading="Cities of West Yorkshire"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
