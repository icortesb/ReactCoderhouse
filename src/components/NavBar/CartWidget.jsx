import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
import {IoCartOutline} from "react-icons/io5";

const CartWidget = ({menuOpen}) => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div
            className={`relative flex-col items-center p-2 w-fit  ${
                menuOpen ? "flex" : "hidden"
            } lg:flex`}
        >
            <IoCartOutline size={40} color="white" />
            <div className="bg-red-500 rounded-full w-7 h-7 flex justify-center items-center absolute top-0 right-0">
                {totalItems}
            </div>
        </div>
    );
};

export default CartWidget;
