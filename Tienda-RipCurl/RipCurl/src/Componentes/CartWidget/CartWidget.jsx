import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)

    return (
        <div>
            <Link to="/cart">
            <img src="../../../public/bolso-icono.png" alt="bolso-compras" height="30"/>
            </Link> 
            {cantidadTotal> 0 && <strong>{cantidadTotal}</strong>}
        </div>
    )
}

export default CartWidget 