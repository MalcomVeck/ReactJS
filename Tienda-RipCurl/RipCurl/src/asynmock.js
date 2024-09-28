const misProductos= [
    {id: "1", nombre: "Remera Ranglan Surf", precio: 29999, cat: "remeras", img: "../public/R1.jpg", desc: "Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "2", nombre: "Remera Undertow Panel", precio: 39999, cat: "remeras", img: "../public/R2.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "3", nombre: "Remera Reel It JN", precio: 34999, cat: "remeras", img: "../public/R3.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"}, 
    {id: "4", nombre: "Remera Mason Pipelines", precio: 34999, cat: "remeras", img: "../public/R4.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "5", nombre: "Remera Slow Down", precio: 29999, cat: "remeras", img: "../public/R5.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "6", nombre: "Remera Baby Icons", precio: 24999, cat: "remeras", img: "../public/R6.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "7", nombre: "Remera Crop Paradiso", precio: 29999, cat: "remeras", img: "../public/R7.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "8", nombre: "Remera Crew Riptide", precio: 34999, cat: "remeras", img: "../public/R8.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "9", nombre: "Camisa Floral Reef", precio: 79999, cat: "camisas", img: "../public/C1.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "10", nombre: "Camisa Lay Day", precio: 59999, cat: "camisas", img: "../public/C2.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "11", nombre: "Camisa Plain BYN", precio: 59999, cat: "camisas", img: "../public/C3.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "12", nombre: "Camisa Floral Oversize", precio: 69999, cat: "camisas", img: "../public/C4.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "13", nombre: "Camisa Premium Surf", precio: 89999, cat: "camisas", img: "../public/C5.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "14", nombre: "Camisa Premium Stripes", precio: 79999, cat: "camisas", img: "../public/C6.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "15", nombre: "Camisa Heavy Flannel", precio: 49999, cat: "camisas", img: "../public/C7.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "16", nombre: "Camisa Over Plaid", precio: 99999, cat: "camisas", img: "../public/C8.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "17", nombre: "Bermuda Chino Epic", precio: 69999, cat: "shorts", img: "../public/S1.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "18", nombre: "Boardwalk Global Entry 20 Pulg", precio: 159999, cat: "shorts", img: "../public/S2.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "19", nombre: "Boardwalk Cargo Classic Surf", precio: 129999, cat: "shorts", img: "../public/S3.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "20", nombre: "Boardwalks Saltwater Culture 19 Pulg", precio: 99999, cat: "shorts", img: "../public/S4.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "21", nombre: "Short Premium Surf", precio: 59999, cat: "shorts", img: "../public/S5.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "22", nombre: "Short Swim Surf", precio: 29999, cat: "shorts", img: "../public/S6.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "23", nombre: "Short Mid Blue Farayed", precio: 49999, cat: "shorts", img: "../public/S7.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "24", nombre: "Short Brazilian", precio: 59999, cat: "shorts", img: "../public/S8.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "25", nombre: "Steamer 4/3 Omega Back Zip", precio: 599999, cat: "neoprene", img: "../public/N1.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "26", nombre: "Streamer 4/3 Freelite", precio: 399999, cat: "neoprene", img: "../public/N2.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "27", nombre: "Streamer 4/3 Patrol", precio: 799999, cat: "neoprene", img: "../public/N3.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "28", nombre: "Streamer 4/3 Flashbomb Fusion", precio: 999999, cat: "neoprene", img: "../public/N4.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "29", nombre: "Steamer 4/3 Omega", precio: 499999, cat: "neoprene", img: "../public/N5.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "30", nombre: "Steamer 4/3 Dawn Patrol CZ", precio: 699999, cat: "neoprene", img: "../public/N6.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "31", nombre: "Steamer 4/3 Flash Bomb Chest Zip", precio: 799999, cat: "neoprene", img: "../public/N7.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
    {id: "32", nombre: "Streamer 4/3 Flash Bomb Fusion", precio: 899999, cat: "neoprene", img: "../public/N8.jpg", desc:"Alguna descripción interesante a agregar a futuro.", stock: "10"},
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{ 
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 500)
    })
}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.cat === idCategoria)
            resolve(producto)
        }, 500)
    })
}