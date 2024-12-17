import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer
                                greeting={"Todos los productos!!"}
                            />
                        }
                    />
                    <Route
                        path="/category/:idCategory"
                        element={
                            <ItemListContainer greeting={"Bienvenidos!"} />
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <ItemDetailContainer />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
