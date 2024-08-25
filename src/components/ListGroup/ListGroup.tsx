import { MouseEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: "Helvetica";
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "lightblue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const message = items.length === 0 && <p>The fruit bowl is empty :(</p>;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h2>{heading}</h2>
      {message}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default ListGroup;
