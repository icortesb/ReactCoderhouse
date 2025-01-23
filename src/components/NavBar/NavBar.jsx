import CartWidget from "./CartWidget";
import HamburgerMenu from "./HamburgerMenu";
import {GiPumpkinMask} from "react-icons/gi";
import {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts.jsx";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { products } = useProducts({});
    const categories = [...new Set(products.map(product => product.category))];

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

    return (
        <nav className="h-auto p-4 text-gray-200 bg-slate-900 lg:flex lg:justify-between">
            <Link to={`/`} className="flex items-center justify-center w-auto p-2">
                <GiPumpkinMask color="orange" size={50} />
                <h1 className="p-3 font-sans text-xl font-semibold tracking-wider text-center select-none">
                    MICHAEL BUYERS
                </h1>
            </Link>
            <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <ul
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col lg:flex lg:flex-row lg:items-center lg:flex-grow `}
            >
                {categories.map((category) => (
                    <NavLink
                        to={`/category/${category}`}
                        className={({ isActive }) =>
                            `p-3 text-md rounded hover:bg-slate-300 hover:text-gray-800 ${
                                isActive ? "bg-slate-300 text-gray-800" : ""
                            }`
                        }
                        key={category}
                    >
                        {category.toUpperCase()}
                    </NavLink>
                ))}
            </ul>
            <CartWidget menuOpen={menuOpen} />
        </nav>
    );
};

export default NavBar;
