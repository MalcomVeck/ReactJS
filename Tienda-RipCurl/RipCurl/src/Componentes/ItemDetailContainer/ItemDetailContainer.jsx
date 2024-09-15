import { useState, useEffect} from 'react';
import { getUnProducto } from '../../asynmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idProducto} = useParams() 
    
    useEffect(()=>{
        getUnProducto(idProducto)
          .then(res => setProducto(res))
    }, [idProducto])

  return (
    <>
      <ItemDetail {...producto} />
    </>
  )
}

export default ItemDetailContainer