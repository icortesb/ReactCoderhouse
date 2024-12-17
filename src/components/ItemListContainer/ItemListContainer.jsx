import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts.jsx";

const ItemListContainer = ({ greeting }) => {
    const { idCategory } = useParams();
    const { products, loading } = useProducts({ idCategory });

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
