// import React from 'react'
import ProductoImagen from '../ProductoImagen/ProductoImagen'
import ProductoInfo from '../ProductoInfo/ProductoInfo'
import ProductoBoton from '../ProductoBoton/ProductoBoton'

const ProductoCard = () => {
    return (
        <div className="col-md-3">
            <div className="card border-0">
                <ProductoImagen/>
                <ProductoInfo/>
                <ProductoBoton/>
            </div>
        </div>
    )
}

export default ProductoCard