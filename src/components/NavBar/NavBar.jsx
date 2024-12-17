import CartWidget from "./CartWidget";
import HamburgerMenu from "./HamburgerMenu";
import {GiPumpkinMask} from "react-icons/gi";
import {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const items = ["remeras", "pantalones", "zapatillas", "camperas", "gorras"];

    return (
        <nav className="bg-slate-900 text-gray-200 h-auto p-4 lg:flex lg:justify-between">
            <Link to={`/`} className="flex justify-center items-center p-2 w-auto">
                <GiPumpkinMask color="orange" size={50} />
                <h1 className="font-sans font-semibold text-xl tracking-wider text-center p-3 select-none">
                    MICHAEL BUYERS
                </h1>
            </Link>
            <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <ul
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col lg:flex lg:flex-row lg:items-center lg:flex-grow `}
            >
                {items.map((item) => (
                    <Link
                        to={`/category/${item}`}
                        className="p-3 text-md rounded hover:bg-slate-300 hover:text-gray-800"
                        key={item}
                    >
                        {item.toUpperCase()}
                    </Link>
                ))}
            </ul>
            <CartWidget menuOpen={menuOpen} />
        </nav>
    );
};

export default NavBar;
