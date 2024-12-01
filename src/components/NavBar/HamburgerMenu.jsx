import {RxHamburgerMenu} from "react-icons/rx";

const HamburgerMenu = ({menuOpen, toggleMenu}) => {

    return (
        <div
        className="block absolute right-3 top-5 lg:hidden"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        >
            <RxHamburgerMenu size={40} />
        </div>
    );
};
export default HamburgerMenu;
