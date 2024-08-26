// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ProductListContainer from './Componentes/ProductListContainer/ProductListContainer'
import Footer from './Componentes/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <ProductListContainer/>
    <Footer greeting="Este es mi pié"/>
    </>
  )
}

export default App
