import ItemCountContainer from "../ItemCount/ItemCountContainer";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

    const { addProduct } = useContext(CartContext);

    const addProductToCart = (count) => {
        const productCart = {
            ...product,
            quantity: count,
        };
        addProduct(productCart);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl overflow-hidden rounded shadow-lg">
                <div className="flex">
                    <img src={product.imgPreview} alt={product.name} className="object-cover w-1/2 h-auto mb-4" style={{ maxHeight: '500px' }} />
                    <img src={product.imgDetail} alt={product.name} className="object-cover w-1/2 h-auto mb-4" style={{ maxHeight: '500px' }} />
                </div>
                <div className="p-4">
                    <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
                    <p className="mb-4 text-lg text-gray-700">{product.description}</p>
                    <p className="mb-4 text-2xl font-semibold">${product.price}</p>
                    <p className="mb-4 text-sm text-gray-600">Stock: {product.stock}</p>
                    <ItemCountContainer stock={product.stock} addProductToCart={addProductToCart} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;