const ItemCount = ({
    count,
    handleClickAdd,
    handleClickRemove,
    isDisabled,
    addProductToCart,
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <button
                    onClick={handleClickRemove}
                    className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    -
                </button>
                <input
                    type="text"
                    className="appearance-none bg-gray-200 text-gray-700 text-center w-16 rounded border border-gray-400 py-2 px-4"
                    value={count}
                    readOnly
                />
                <button
                    onClick={handleClickAdd}
                    className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    +
                </button>
            </div>
            <button
                type="button"
                onClick={() => addProductToCart(count)}
                className={`${
                    isDisabled ? "cursor-not-allowed bg-gray-400" : "bg-gray-800"
                } text-white font-bold py-2 px-4 mt-2 rounded `}
                disabled={isDisabled}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
