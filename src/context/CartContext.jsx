import {createContext, useState, useEffect} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(cartLocalStorage);

    useEffect(() => {
       localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return updatedCart;
            } else {
                return [...prevCart, product];
            }
        });
    }

    const removeProduct = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    }

    const clearCart = () => {
        setCart([]);
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, totalPrice, totalItems, clearCart}}>{children}</CartContext.Provider>
    );
};

export {CartContext, CartProvider};
