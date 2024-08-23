// import React from 'react'
import ProductoImagen from '../ProductoImagen/ProductoImagen'
import ProductoInfo from '../ProductoInfo/ProductoInfo'
import ProductoBoton from '../ProductoBoton/ProductoBoton'
import "./ProductoCard.css"

const ProductoCard = () => {
    return (
    <div className='producto-card'>
        <ProductoImagen/>
        <ProductoInfo/>
        <ProductoBoton/>
    </div>
    )
}

export default ProductoCard