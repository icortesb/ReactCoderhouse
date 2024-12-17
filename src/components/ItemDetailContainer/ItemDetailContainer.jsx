import ItemDetail from "./ItemDetail";
import { useProducts } from "../../hooks/useProducts.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { products, loading } = useProducts({ id });

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <ItemDetail product={products} />
    )
    
}
export default ItemDetailContainer;