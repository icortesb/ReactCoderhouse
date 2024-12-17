import {useState} from "react";
import { useProducts } from "../../hooks/useProducts.jsx";

const hocFilterProducts = (Component) => {
    function FilteredComponent(props) {
        const {products, loading} = useProducts();
        const [query, setQuery] = useState("");

        const changeInput = (event) => {
            setQuery(event.target.value.toLowerCase());
        };

        const search = () => {
            const filterProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(query);
            });

            return filterProducts;
        };

        return (
            <>
                <div>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={changeInput}
                    />
                </div>
                <Component {...props} products={search()} loading={loading} />
            </>
        );
    }

    return FilteredComponent;
};

export default hocFilterProducts;
