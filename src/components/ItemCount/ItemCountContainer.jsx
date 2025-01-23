import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, addProductToCart }) => {
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setIsDisabled(count === 0);
    }, [count]);

    const handleClickAdd = () => {
        setCount((prevCount) => (prevCount < stock ? prevCount + 1 : stock));
    };

    const handleClickRemove = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };


    //Evita que se acumule count si no se cambia el valor antes de agregar nuevamente el mismo producto
    const resetCount = () => {
        setCount(0);
    };

    return (
        <ItemCount
            count={count}
            handleClickAdd={handleClickAdd}
            handleClickRemove={handleClickRemove}
            isDisabled={isDisabled}
            addProductToCart={addProductToCart}
            resetCount={resetCount}
        />
    );
};

export default ItemCountContainer;
