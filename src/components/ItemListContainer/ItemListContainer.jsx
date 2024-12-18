import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts.jsx";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
    const { idCategory } = useParams();
    const { products, loading } = useProducts({ idCategory });

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? (
                <Spinner />
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
