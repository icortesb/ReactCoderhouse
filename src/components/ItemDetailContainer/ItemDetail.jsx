const ItemDetail = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl rounded overflow-hidden shadow-lg">
                <div className="flex">
                    <img src={product.imgPreview} alt={product.name} className="w-1/2 h-auto object-cover mb-4" style={{ maxHeight: '500px' }} />
                    <img src={product.imgDetail} alt={product.name} className="w-1/2 h-auto object-cover mb-4" style={{ maxHeight: '500px' }} />
                </div>
                <div className="p-4">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 text-lg mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold mb-4">${product.price}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail