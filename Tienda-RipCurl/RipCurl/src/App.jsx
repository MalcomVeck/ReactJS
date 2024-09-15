// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import Footer from './Componentes/Footer/Footer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
