const ItemCount = ({
    count,
    handleClickAdd,
    handleClickRemove,
    isDisabled,
    addProductToCart,
    resetCount, // new prop
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <button
                    onClick={handleClickRemove}
                    className="px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-l"
                >
                    -
                </button>
                <input
                    type="text"
                    className="w-16 px-4 py-2 text-center text-gray-700 bg-gray-200 border border-gray-400 rounded appearance-none"
                    value={count}
                    readOnly
                />
                <button
                    onClick={handleClickAdd}
                    className="px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-r"
                >
                    +
                </button>
            </div>
            <button
                type="button"
                onClick={() => {
                    addProductToCart(count);
                    resetCount();
                }}
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
