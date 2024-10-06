import { useState, useContext } from "react"
import {CarritoContext} from "../../Context/CarritoContext" 
import { db } from "../../Services/Config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { TextField } from "@mui/material"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)

    const manejadorFormulario =(e) => {
        e.preventDefault()

        if(!nombre || !apellido || !telefono || !email) {
            setError("Debes completar todos los campos!")
            return;
        }

        const orden = {
            items: carrito.map (producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) =>{
                const productoRef = doc(db, "Inventario", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito();
                setNombre("")
                setApellido("")
                setTelefono("")
                setEmail("")
            })
            .catch(error => {
                console.log("Error al crear la orden", error)
                setError("Error al crear la orden!")
            })
        })
        .catch((error) => {
            console.log("No se pudo actualizar el stock", error)
            setError("No se pudo actualizar el stock. Estamos trabajando para solucionarlo")
        })
    }

  return (
    <form onSubmit={manejadorFormulario}>
        <div className="container my-5 shadow rounded-4">
            <div className="row">
                <h2 className="text-dark ms-5 pt-4">Checkout</h2>
                    <div className="visually-hidden">
                        {carrito.map(producto => ( 
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre}</p>
                            <p>{producto.item.precio} * {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                        </div>
                        ))}   
                    </div>
                    <h3 className="text-dark ms-5 pt-2">Datos de contacto</h3>
                    <TextField className="fs-3 ms-5 mt-2 col-11"
                        label="Nombre"
                        type="text" 
                        variant="outlined"
                        name="nombre"
                        holder="padding-1"
                        onChange={(e)=>setNombre(e.target.value)} value={nombre}          
                    />
                    <TextField className="fs-3 ms-5 mt-3 col-11"
                        label="Apellido"
                        type="text" 
                        variant="outlined"
                        name="apellido"
                        onChange={(e)=>setApellido(e.target.value)} value={apellido}           
                    />
                    <TextField className="fs-3 ms-5 mt-3 col-11"
                        label="Teléfono Celular"
                        type="phone" 
                        variant="outlined"
                        name="phone"
                        onChange={(e)=>setTelefono(e.target.value)} value={telefono}          
                    />
                    <TextField className="fs-3 ms-5 mt-3 mb-2 col-11"
                        label="Email"
                        type="text" 
                        variant="outlined"
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)} value={email}          
                    />
                    <div className="text-center">
                    {error && <p style={{color:"red"}}> {error}</p>}
                        <button className="fs-5 col-3 text-light bg-black mt-3 mb-4" type="submit">FINALIZAR COMPRA</button>
                    {ordenId && (<strong>¡Gracias por tu compra! Tu numero de orden es: {ordenId}</strong>)}
                    </div>       
            </div>
        </div>
    </form>
  )
}

export default Checkout