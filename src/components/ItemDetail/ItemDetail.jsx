import ItemCount from "../Counter/ItemCount"
import { useCartContext } from "../context/CartContext"
import { useState } from "react"


const ItemDetail = ({product})=>{
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct}  = useCartContext()
    const onAdd = (quantity) => {
        console.log('entre a itemdetail'+product)
        console.log(quantity)
        addProduct( {...product, quantity } )
        setIsCounter(false)
  }

  return(
    <div className="row container w-50 text-center card-body m-4">
      <h2>Vista de detalle</h2>
      <div className="col">
        <img className="w-25" src={product.imageUrl} alt="imagen"/>
        
        <div>
          <p>Nombre: {product.name}</p> 
          <p>Descripción: {product.description}</p> 
          <p>Precio: {product. price}</p> 
          <p>Stock: {product.stock}</p> 
        </div>
      </div>

      <ItemCount initial = {1} stock={product.stock} onAdd={onAdd}/>
    </div>
  )
 }

export default ItemDetail