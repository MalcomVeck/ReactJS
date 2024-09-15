import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="col-md-3 mt-4">
      <div className="card border-0">
        <img src={img} alt={nombre} />
        <div className="card-body text-center">
          <h4>{nombre}</h4>
          <h4 className="text-danger">${precio} ARS</h4>
          <Link to={`/detalle/${id}`}><button className="w-100 p-3 fs-5">Ver Producto</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Item