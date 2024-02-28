import CartItem from "./CartItem";

function CartList(props) {
  const { carts } = props;

  const cartListRender = carts.map((cartItem) => {
    return <CartItem />;
  });
  return <div>{cartListRender}</div>;
}

export default CartList;
