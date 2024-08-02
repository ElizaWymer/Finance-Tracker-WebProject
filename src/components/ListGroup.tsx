import { Fragment } from "react/jsx-runtime";
const fruits = ["apple", "banana", "cherry", "durian", "stawberry"];

function ListGroup() {
  return (
    <Fragment>
      <h2> List Heading</h2>
      <ul className="list-group">
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
