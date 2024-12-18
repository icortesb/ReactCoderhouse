import ItemDetail from "./ItemDetail";
import { useProducts } from "../../hooks/useProducts.jsx";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { products, loading } = useProducts({ id });

    return loading ? <Spinner /> : <ItemDetail product={products} />;
}

export default ItemDetailContainer;
