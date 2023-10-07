  import { useState } from "react"
  import ItemCount from "../Counter/ItemCount"
  import { useCartContext } from "../context/CartContext"
  import { addDoc, collection, getFirestore } from "firebase/firestore"

  const CartContainer = () => {
    const [ dataForm, setDataForm]= useState({
      name: '',
      surname: '',
      email:'',
      email2:'',
      phone:''
      
    })
    
    const [id, setId] = useState('') 
    const {cartList, deleteCart, eliminarProducto, precioTotal,addProduct} = useCartContext()
    console.log('por acá pasé')
    const handleAddToCart = async (evt) => {
      evt.preventDefault()
      
      if (!dataForm.name ||!dataForm.surname || !dataForm.phone || !dataForm.email || !dataForm.email2) {
        alert("se encontró un campo en blanco");
        return;
      } else if (dataForm.email !== dataForm.email2) {
        alert("compruebe que los mails cohincidan por favor. Gracias");
        return;
      }

      const order = {}
      order.buyer = dataForm
      order.items = cartList.map(prod => {
        return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
      })
      order.total = precioTotal()   

        console.log(order)
      const queryDB = getFirestore()
      const ordersCollection = collection(queryDB, 'orders')
      addDoc(ordersCollection, order)
      .then(({id}) => setId(id))
      .catch(err => console.log(err))
      .finally(()=>{
        setDataForm({
          name: '', 
          phone: '', 
          email: '',  
          email2: ''
        })
        deleteCart()
      })

    }




    const handleOnChange = (evt) => {
      setDataForm({
        ...dataForm,
        [evt.target.name] : evt.target.value
      })
    }

  
    return (
      <>
      {id !== '' && <h3>SE ha generado le orden de compra: {id}</h3>}
      <div>
        {cartList.map(prod => 
            <div key={prod.id}>
            <img src={prod.imageUrl} className="w-25"/>
            {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
            <button className="btn btn-danger" onClick={ () => eliminarProducto(prod.id) }> X </button>

            
        </div>)}
          <button onClick={deleteCart}>Vaciar Carrito</button>
          <h3>Precio total: {precioTotal()}</h3>
          <form onSubmit={handleAddToCart}>
            <input type="text" name="name" placeholder="ingrese su nombre" 
            value={dataForm.name} onChange={handleOnChange}/>
            <input type="text" name="surname" placeholder="ingrese su apellido" 
            value={dataForm.surname} onChange={handleOnChange}/>
            <input type="text" name="email" placeholder="ingrese su email" 
            value={dataForm.email} onChange={handleOnChange}/>
            <input type="text" name="email2" placeholder="ingrese reingrese su correo" 
            value={dataForm.email2} onChange={handleOnChange}/>
            <input type="text" name="phone" placeholder="ingrese su número de telefono" 
            value={dataForm.phone} onChange={handleOnChange}/>

            <button className="btn btn-success">
            Terminar Compra
            </button>
          </form>
          
        </div>
      </>
    )

  }
  export default CartContainer