import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import ErrorRedirect from "./components/ErrorRedirect/ErrorRedirect";
import {CartProvider} from "./context/CartContext";

function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:idCategory"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detail/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="*" element={<ErrorRedirect />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
