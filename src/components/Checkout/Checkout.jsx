import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [orderId, setOrderId] = useState(null)
    const { cart, totalPrice, clearCart } = useContext(CartContext)

    console.log(`formData`, formData)

    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const orden = {
            buyer: {...formData},
            products: [...cart],
            total: totalPrice,
            date : Timestamp.fromDate(new Date())
        }
        console.log(`orden`, orden)

        await uploadOrder(orden)
    }

    const uploadOrder = async (orden) => {
        try {
            const orderRef = collection(db, 'orders')
            const res = await addDoc(orderRef, orden)
            setOrderId(res.id)
            clearCart()
        } catch (e) {
            console.error(`Error adding document: ${e}`)
        }
    }


    return (
      <div>
        {orderId ? (
          <div>
            <h2>Gracias por tu compra</h2>
            <p>Tu número de orden es: {orderId}</p>
          </div>
        ) : (
          <FormCheckout
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    );
}

export default Checkout