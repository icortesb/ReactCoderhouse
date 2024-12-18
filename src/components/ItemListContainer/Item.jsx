import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <Link to={`/detail/${product.id}`} className="border border-gray-300 rounded-lg p-4 w-52">
            <img src={product.imgPreview} alt={product.name} className="w-full h-auto rounded-t-lg" />
            <div className="p-2">
                <h2 className="text-xl mb-2">{product.name}</h2>
                <p className="mb-2">{product.description}</p>
                <p className="font-bold mb-2">${product.price}</p>
                <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
        </Link>
    );
};

export default Item;
