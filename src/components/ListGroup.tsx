import { MouseEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let fruits = ["Apples", "Bananas", "Cherrys", "Durians", "Strawberries"];
  //fruits = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = fruits.length === 0 && <p>The fruit bowl is empty :(</p>;
  /*
  const getMessage = () => {
    return fruits.length === 0 ? <p>The fruit bowl is empty :(</p> : null;
  };
  */

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h2>Fruit Bowl</h2>
      {message}
      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={fruit}
            onClick={() => {
              setSelectedIndex(index);
            }}
            //{handleClick}
            //{() => console.log("Clicked " + fruit, index)}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
