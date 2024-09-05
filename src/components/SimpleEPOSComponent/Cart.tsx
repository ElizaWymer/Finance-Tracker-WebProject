import { Fragment } from "react/jsx-runtime";
import { Button } from "style-components";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <Fragment>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>

      <Button onClick={onClear}> Clear </Button>
    </Fragment>
  );
};

export default Cart;
