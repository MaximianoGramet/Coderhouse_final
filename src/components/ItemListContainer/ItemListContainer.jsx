import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


const ItemListContainer = () => {
  
  const [products, setProduct] = useState([])
  const [ loading, setLoading ] = useState(true)
  const {cid} = useParams()
  
  useEffect(()=>{
  if(cid){
    const db = getFirestore();
    const queryCollection = collection(db, 'products')
    const queryFilter = query(queryCollection, where('category', '==', cid))
    getDocs(queryFilter)
    .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ...prod.data() }))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }
  else {
    const db = getFirestore();
    const queryCollection = collection(db, 'products')
    getDocs(queryCollection)
    .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ...prod.data() }))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }

}, [cid])

  return (
    <div className="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 container g-3 m-3">
        { loading ? <h2>Loading ...</h2> : 
          <ItemList product={products}/>
        }
      </div>
    </div>
  )
}
export default ItemListContainer