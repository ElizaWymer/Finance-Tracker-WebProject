import Message from "./Message";
import Alert from "./components/Alert";
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
      {/* 
        <Message />
        <ListGroup
          items={fruits}
          heading="Fruit Bowl"
          onSelectItem={handleSelectItem}
        />
      */}
      <Alert>
        A simple primary <span>alert!</span>
      </Alert>
    </div>
  );
}

export default App;
