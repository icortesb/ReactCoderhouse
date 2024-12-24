import {createContext, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

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
    
    console.log(cart);
    return (
        <CartContext.Provider value={{cart, addProduct}}>{children}</CartContext.Provider>
    );
};

export {CartContext, CartProvider};
