import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import carrito from '../../assets/carrito.png';
import { useCartContext } from '../context/CartContext';

function Cart(){
  const {cantidadTotal} = useCartContext()
  return(
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
          <Navbar.Text>
          <img src={carrito} width='32px' height='32px'/>
          </Navbar.Text>
          {cantidadTotal()}
        </Navbar.Collapse>
  )
}

export default Cart