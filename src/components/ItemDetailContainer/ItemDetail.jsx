const ItemDetail = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded overflow-hidden shadow-lg">
        <img src={product.imgDetail} alt={product.name} className="w-full h-96 object-cover mb-4" />
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