import {Link} from "react-router-dom";
import {IoCartOutline} from "react-icons/io5";
import Cart from "../Cart/Cart";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";

const CartWidget = ({menuOpen}) => {
  const { totalItems } = useContext(CartContext);


  return (
    <Link
      to="/cart"
      element={<Cart />}
      className={`relative flex-col items-center p-2 w-fit  ${
        menuOpen ? "flex" : "hidden"
      } lg:flex`}
    >
      <IoCartOutline size={40} color="white" />

      {totalItems > 0 && (
        <div className="absolute top-0 right-0 flex items-center justify-center bg-red-500 rounded-full w-7 h-7">
          {totalItems}
        </div>
      )}
    </Link>
  );
};

export default CartWidget;
