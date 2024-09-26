import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h3 className='text-center align-middle'>AÚN NO HAY PRODUCTOS EN EL BOLSO!</h3>
                <h5 className='text-center align-middle'><Link to="/"><button className="fs-5 mt-3 btn btn-dark btn-lg rounded-2">VER PRODUCTOS</button></Link></h5>
            </>
        )
    } 
    return (
        <div className='container my-5 shadow'>
            <table className='table pt-5'>
                <thead>
                  <tr>
                    <td><h4 className="ps-5 text-start align-middle" colSpan="2">BOLSO DE COMPRAS</h4></td>
                    <td><h5 className="ps-5 align-middle" colSpan="3">Cantidad:</h5></td>
                    <td><h5 className="text-center align-middle" colSpan="4">Precio Unidad:</h5></td>
                    <td className="text-end align-middle" colSpan="6"><button className='btn-md rounded-0' onClick={()=> vaciarCarrito()}>LIMPIAR</button></td>
                  </tr>
                </thead>
                <tbody>
                    {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="text-end align-middle" colSpan="2"><h4>Cantidad Total: {cantidadTotal}</h4></td>
                    <td className="text-center align-middle"><h4>Valor Total: ${total} ARS</h4></td>
                    <td className="text-end align-middle"><Link to="/checkout" className="btn btn-dark btn-lg rounded-0">CHECKOUT</Link></td>
                  </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Cart