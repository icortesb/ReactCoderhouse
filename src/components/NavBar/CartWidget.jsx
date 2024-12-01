import { IoCartOutline } from "react-icons/io5";

const CartWidget = ({ menuOpen }) => {
  return (
    <div
      className={`p-2 items-center w-fit flex flex-col ${
        menuOpen ? "block" : "hidden"
      } lg:flex`}
    >
      <IoCartOutline size={40} color="white" />
      <span>1</span>
    </div>
  );
};

export default CartWidget;
