interface Props {
  cartItemsCount: number;
}

const ItemTracker = ({ cartItemsCount }: Props) => {
  return <div>Item Tracker: {cartItemsCount}</div>;
};

export default ItemTracker;
