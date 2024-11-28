import "./NavBar.css";

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
    <nav>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onMouseOver={(e) => handleMouseOver(e, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
