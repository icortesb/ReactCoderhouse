import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = React.memo(
  ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    console.log(`Renderizando ${product.name}.`);

    return (
      <Link
        to={`/detail/${product.id}`}
        className="flex flex-col p-4 overflow-hidden border border-gray-300 rounded-lg w-52 h-96"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        title={product.name}
      >
        <img
          src={isHovered ? product.imgDetail : product.imgPreview}
          alt={product.name}
          className="object-cover w-48 h-48 rounded-t-lg"
        />
        <div className="flex-grow p-2">
          <h2 className="mb-2 text-xl truncate">{product.name}</h2>
          <p className="mb-2 truncate">{product.description}</p>
          <p className="mb-2 font-bold">${product.price}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
        </div>
      </Link>
    );
  },
  (prevProps, nextProps) => {prevProps.product == nextProps.product}
);

export default Item;
