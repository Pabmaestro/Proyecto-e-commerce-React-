import CartIcons from "./CartIcon";
import CartItems from "./CartItems.JSX";

const CartConteiner = () => {
  return (
    <div className="bg-warning rounded-circle p-3 position-relative">
      <CartIcons color="black" />
      <CartItems count={10} />
    </div>
  );
};

export default CartConteiner;
