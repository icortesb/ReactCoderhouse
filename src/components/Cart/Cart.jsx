import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart, removeProduct } = useContext(CartContext)

    return (
        <div>
            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-96">
                    <h1 className="text-2xl mb-4">No hay productos en el carrito</h1>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600">
                        Go Shopping
                    </Link>
                </div>
            ) : (
                <div className="p-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center border-b border-gray-300 py-4">
                            <img src={item.imgPreview} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600">Cantidad: {item.quantity}</p>
                                <p className="text-gray-600">Precio: ${item.price}</p>
                            </div>
                            <button 
                                onClick={() => removeProduct(item.id)} 
                                className="bg-red-500 text-white py-1 px-3 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-red-600 ml-4"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-600">
                        Finish Purchase
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart