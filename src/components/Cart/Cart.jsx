import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart, removeProduct } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-96">
                    <h1 className="mb-4 text-2xl">No hay productos en el carrito</h1>
                    <Link to="/" className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-full shadow-lg hover:scale-105 hover:bg-blue-600">
                        Go Shopping
                    </Link>
                </div>
            ) : (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex items-center py-4 border-b border-gray-300">
                                <img src={item.imgPreview} alt={item.name} className="object-cover w-20 h-20 mr-4 rounded-lg" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">Cantidad: {item.quantity}</p>
                                    <p className="text-gray-600">Precio: ${item.price}</p>
                                </div>
                                <button 
                                    onClick={() => removeProduct(item.id)} 
                                    className="px-3 py-1 ml-4 text-white transition-transform transform bg-red-500 rounded-full shadow-lg hover:scale-105 hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 text-right">
                        <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
                    </div>
                    <button className="px-4 py-2 mt-4 text-white transition-transform transform rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:from-blue-600 hover:to-purple-600">
                        Finish Purchase
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart