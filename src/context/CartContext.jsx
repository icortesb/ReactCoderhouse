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
    
    console.log(cart);
    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct}}>{children}</CartContext.Provider>
    );
};

export {CartContext, CartProvider};
