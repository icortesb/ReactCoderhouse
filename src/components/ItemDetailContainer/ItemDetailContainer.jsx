import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})

    useEffect(() => {
      getProducts()
        .then((data) => {
            const productFind = data.find((dataProduct) => dataProduct.id === 1)
            setProduct(productFind)
        })

    }, [])

    return (
        <ItemDetail product={product} />
    )
    
}
export default ItemDetailContainer