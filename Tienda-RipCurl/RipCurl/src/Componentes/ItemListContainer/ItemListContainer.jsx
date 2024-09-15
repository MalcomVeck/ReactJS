import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../../asynmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams()

    useEffect(()=> {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        }, [idCategoria])

    return (
        <div className="container my-5">
            <div className="row">
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer