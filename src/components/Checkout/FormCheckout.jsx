const FormCheckout = ({formData, handleChangeInput, handleSubmit}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
    <form className="w-full max-w-lg p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Checkout</h2>
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">Nombre</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Juan Perez"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={handleChangeInput}
            />
        </div>
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="jperez@gmail.com"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={handleChangeInput}
            />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">Teléfono</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="11 2345-6789"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={handleChangeInput}
            />
        </div>
        <div className="flex items-center justify-between">
            <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
                Enviar
            </button>
        </div>
    </form>
</div>
  )
}
export default FormCheckout