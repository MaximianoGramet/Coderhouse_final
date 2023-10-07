import Item from "../Item/Item";

const ItemList = ({product}) => {
  return (
    <>
      {
        product.map(product => <Item key={product.id} product={product}/>)
      }
    </>
  )
}

export default ItemList
