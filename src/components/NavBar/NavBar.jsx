import CartWidget from "./CartWidget";
import HamburgerMenu from "./HamburgerMenu";
import {useState} from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMouseOver = (event, value) => {
        console.log(`Mouse over on: ${value}`);
        let iteration = 0;
        const target = event.target;
        let interval = setInterval(() => {
            console.log(`Iteration: ${iteration}`);
            target.innerText = value
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return value[index];
                    }
                    const randomLetter =
                        letters[Math.floor(Math.random() * 26)];
                    console.log(
                        `Replacing letter at index ${index} with ${randomLetter}`
                    );
                    return randomLetter;
                })
                .join("");

            if (iteration >= value.length) {
                clearInterval(interval);
                console.log(`Completed animation for: ${value}`);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const items = ["Home", "About", "Services", "Contact"];

    return (
        <nav className="bg-slate-900 text-gray-200 h-auto p-4 lg:flex lg:justify-evenly">
            <div className="p-2 lg:w-28 flex justify-center items-center">
                <h1
                    className="font-sans font-semibold text-xl tracking-wider text-center p-3"
                    onMouseOver={(e) => handleMouseOver(e, "DISHAPE")}
                >
                    DISHAPE
                </h1>
            </div>
            <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <ul
                className={`lg:flex lg:flex-row lg:items-center ${
                    menuOpen ? "block" : "hidden"
                } flex flex-col`}
            >
                {items.map((item) => (
                    <li className="p-3 text-lg rounded hover:bg-slate-300 hover:text-gray-800" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            <CartWidget menuOpen={menuOpen} />
        </nav>
    );
};

export default NavBar;
