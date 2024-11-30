import "./NavBar.css";
import CartWidget from "./CartWidget";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const NavBar = () => {

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
                const randomLetter = letters[Math.floor(Math.random() * 26)];
                console.log(`Replacing letter at index ${index} with ${randomLetter}`);
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
    <nav className="bg-slate-900 text-gray-200">
        <h1 className="font-sans font-semibold text-xl tracking-wider text-center p-3" onMouseOver={(e) => handleMouseOver(e, "DISHAPE")}>DISHAPE</h1>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li className="p-3"
            key={item}
            // onMouseOver={(e) => handleMouseOver(e, item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;
