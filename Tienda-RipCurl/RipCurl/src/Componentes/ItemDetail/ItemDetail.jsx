import { useState } from "react";
import Contador from "../Contador/contador";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";


const ItemDetail = ({id, nombre, precio, img, desc, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio}
      agregarAlCarrito (item, cantidad)
  }

  return (
    <div className="container my-5">
      <div className="card border-light bg-light shadow p-2 w-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="position p-2" height="600" alt={nombre}/>
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body">
              <h2 className="card-title pt-2">{nombre}</h2>
              <h6 className="card-text pt-3">Artículo Número: {id}</h6>
              <h5 className="card-text pt-3"><b>Descripción:</b> {desc}</h5>
              <h2 className="card-text text-danger pt-3">${precio} ARS</h2>
              <h5>{agregarCantidad > 0 ? (<Link to="/cart"><button className="fs-5 mt-5 btn btn-dark btn-lg rounded-2">FINALIZAR COMPRA</button></Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)}</h5>
              <Link to="/"><button className="fs-6 mt-5 border-black rounded-2">MÁS PRODUCTOS</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

{/* <button className="w-25 p-3 fs-4 mt-3 btn btn-outline-danger"><b>COMPRAR</b></button> */}
