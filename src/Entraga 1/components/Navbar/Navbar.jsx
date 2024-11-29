import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="brand">

        </div>
        <ul className="categories">
            <li>Remeras</li>
            <li>Zapatillas</li>
            <li>Buzos</li>
        </ul>
        <CartWidget/>
    </nav>
  )
}
export default Navbar