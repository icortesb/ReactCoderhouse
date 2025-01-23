import { useState, useEffect } from "react";
// import { getProducts } from "../data/data.js";
import { getProducts } from "../data/getProducts.js";

export const useProducts = ({ idCategory, id }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getProducts()
            .then((data) => {
                if (idCategory) {
                    setProducts(data.filter(product => product.category === idCategory));
                } else if (id) {
                    setProducts(data.find(product => product.id === id));
                } else {
                    setProducts(data);
                }
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [idCategory, id]);

    return { products, loading };
};
