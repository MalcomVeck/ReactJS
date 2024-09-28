import { useState, useEffect} from 'react';
import { getUnProducto } from '../../asynmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)

    const {idProducto} = useParams() 
    
    useEffect(()=>{
        setLoading(true)
        getUnProducto(idProducto)
          .then(res => setProducto(res))
          .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Proceso Finalizado")
            setLoading(false)
        })
    
    }, [idProducto])

  return (
    <>
      {loading ? <Loader/> : <ItemDetail {...producto} />}
    </>
  )
}

export default ItemDetailContainer