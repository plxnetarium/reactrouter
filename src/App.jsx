import { useState, useEffect } from 'react'
import Navbar from './components/Navbar' 
import './App.css'
import ProductDetails from './pages/ProductDetails'
import CreateProduct from './pages/CreateProduct'
import ProductList from './pages/ProductList'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router'


function App() {
 

  return (
    <nav>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/products/new-product' element={<CreateProduct/>} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
      </Routes>
      </nav>
  )
}

export default App
