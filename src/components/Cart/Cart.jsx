import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart } = useContext(CartContext)
  return (
    <div className="p-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border-b border-gray-300 py-4">
          <img src={item.imgPreview} alt={item.name} className="w-20 h-20 object-cover mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Cantidad: {item.quantity}</p>
            <p className="text-gray-600">Precio: ${item.price}</p>
          </div>
        </div>
      ))}
      <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-600">
        Finish Purchase
      </button>
    </div>
  )
}
export default Cart