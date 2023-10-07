import ItemCount from "../Counter/ItemCount"
import { useCartContext } from "../context/CartContext"

const CartContainer = () => {

  const {cartList, deleteCart, eliminarProducto, precioTotal,addProduct} = useCartContext()

  const handleAddToCart = (product, quantity) => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    })}

    console.log(cartList)

  return (
    <div>
      {cartList.map(prod => 
          <div key={prod.id}>
          <img src={prod.imageUrl} className="w-25"/>
          {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
          <button className="btn btn-danger" onClick={ () => eliminarProducto(prod.id) }> X </button>

          <ItemCount>
            initial={1}
            stock={10}
            onAdd={(quantity) => handleAddToCart(prod, quantity)} // Llama a handleAddToCart con el producto y la cantidad seleccionada
          </ItemCount>
      </div>)}
      <button onClick={deleteCart}>Vaciar Carrito</button>
        <h3>Precio total: {precioTotal()}</h3>
    </div>
  )
}

export default CartContainer