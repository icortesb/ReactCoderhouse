import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            to={`/detail/${product.id}`} 
            className="border border-gray-300 rounded-lg p-4 w-52 h-96 overflow-hidden flex flex-col"
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <img 
                src={isHovered ? product.imgDetail : product.imgPreview} 
                alt={product.name} 
                className="w-full h-56 object-cover rounded-t-lg" 
                style={{ width: '200px', height: '200px' }}
            />
            <div className="p-2 flex-grow">
                <h2 className="text-xl mb-2 truncate">{product.name}</h2>
                <p className="mb-2 truncate">{product.description}</p>
                <p className="font-bold mb-2">${product.price}</p>
                <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
        </Link>
    );
};

export default Item;
