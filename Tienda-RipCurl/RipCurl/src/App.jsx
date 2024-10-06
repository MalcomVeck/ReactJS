// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import Footer from './Componentes/Footer/Footer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { CarritoProvider } from './Context/CarritoContext'
import Cart from './Componentes/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Componentes/Checkout/Checkout'

function App() {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h2> Sitio en construccion</h2>}/>
      </Routes>
    </CarritoProvider>
    </BrowserRouter>
    <Footer/>
    </>
  );
};

export default App
