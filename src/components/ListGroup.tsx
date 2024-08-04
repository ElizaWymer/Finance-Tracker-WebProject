import { MouseEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>The fruit bowl is empty :(</p>;
  /*
  const getMessage = () => {
    return fruits.length === 0 ? <p>The fruit bowl is empty :(</p> : null;
  };
  */

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h2>{heading}</h2>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            //{handleClick}
            //{() => console.log("Clicked " + fruit, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
