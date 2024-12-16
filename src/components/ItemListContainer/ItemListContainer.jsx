import ItemList from "./ItemList";
import hocFilterProducts from "../../hoc/hocFilterProducts";

const ItemListContainer = ({greeting, products, loading}) => {
    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}
export default hocFilterProducts(ItemListContainer);