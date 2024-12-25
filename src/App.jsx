import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";

import Cart from "./components/Cart/Cart";
import ErrorRedirect from "./components/ErrorRedirect/ErrorRedirect";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import {CartProvider} from "./context/CartContext";

function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={<ItemListContainer />} 
                        />
                        <Route
                            path="/category/:idCategory"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detail/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route
                            path="*"
                            element={<ErrorRedirect />} 
                        />
                        <Route
                            path="/cart"
                            element={<Cart />} 
                        />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
