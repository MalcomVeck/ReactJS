import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db }   from "../../Services/Config";
import {collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const [Inventario, setProductos] = useState([]);
    const [loading, setLoading] = useState(false)

    const {idCategoria} = useParams()

    useEffect(()=> {
        setLoading(true)
        const misProductos = idCategoria ? query(collection(db, "Inventario"), where("categoria", "==", idCategoria)) : (collection(db,"Inventario"))

        getDocs(misProductos)
        .then (res => {
            const nuevosProductos = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id , ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
        .finally(()=>{
            console.log("finalized process")
            setLoading(false)
        })
    }, [idCategoria])

    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.cristobalcolon.com/fullaccess/itemcategory160banner1.jpg" className="d-block w-100" alt="RipCurl"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cristobalcolon.com/fullaccess/itemcategory115banner1.jpg" className="d-block w-100" alt="RipCurl"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cristobalcolon.com/fullaccess/itemcategory138banner1.jpg" className="d-block w-100" alt="RipCurl"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cristobalcolon.com/fullaccess/itemcategory258banner1.jpg" className="d-block w-100" alt="RipCurl"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p className="text-uppercase text-white text-center bg-dark fs-5 p-1"><b>{idCategoria}</b></p>
            <div className="container my-5">
                <div className="row">
                    {loading ? <Loader/> : <ItemList productos={Inventario}/> }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer