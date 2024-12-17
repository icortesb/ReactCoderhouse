const ItemDetail = ({ product }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <img src={product.img} alt={product.name} className="w-full h-auto mb-4" />
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
      </div>
    </div>
  )
}
export default ItemDetail