import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)

    return (
        <div>
            <Link to="/cart">
            <img src="../../../public/bolso-icono.png" alt="bolso-compras" height="40"/>
            </Link> 
            {cantidadTotal> 0 && <strong className='fs-5'>{cantidadTotal}</strong>}
        </div>
    )
}

export default CartWidget 