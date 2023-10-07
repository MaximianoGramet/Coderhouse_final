import { Link } from "react-router-dom"

const Item = ({product}) =>{
  return(
    <>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <img className="w-100  card-img-top" height={'230px'} src={product.imageUrl} alt="imagen prenda"/>
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
          </div>
          <div className="card-footer">
            <Link to={`/detalles/${product.id}`}>
              <button className="btn btn-outline-dark w-100">Detalle</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )    
}
export default Item