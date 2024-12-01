import { IoCartOutline } from "react-icons/io5";

const CartWidget = ({ menuOpen }) => {
  return (
    <div
      className={`relative flex-col items-center p-2 w-fit  ${
        menuOpen ? "flex" : "hidden"
      } lg:flex`}
    >
      <IoCartOutline size={40} color="white" />
      <div className="bg-red-500 rounded-full w-7 h-7 flex justify-center items-center absolute top-0 right-0">1</div>
    </div>
  );
};

export default CartWidget;
