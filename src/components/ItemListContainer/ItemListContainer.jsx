import useProducts from "../../hooks/useProducts";
import hocFilterProducts from "../../hoc/hocFilterProducts";

const ItemListContainer = ({greeting, products}) => {
    const {products, loading} = useProducts();

    return (
        <div>
            <h1>{greeting}</h1>

            {loading ? (
                <Loading />
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc