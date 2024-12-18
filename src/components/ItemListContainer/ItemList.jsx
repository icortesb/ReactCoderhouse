import Item from "./Item"; // Import the Item component

const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap gap-5 p-2 md:p-5">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;