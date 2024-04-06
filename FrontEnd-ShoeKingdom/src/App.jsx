import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Componentes/header/Header'
import Footer from './Componentes/footer/Footer'
import Home from './Componentes/home/Home'
import About from './Componentes/about/About'
import Product from './Componentes/product/Product'
import ProductDetail from './Componentes/detail/Detail'
import Cart from './Componentes/cart/Cart'
import Checkout from './Componentes/checkout/Checkout'
import Favorito from './Componentes/favorites/Favorites'
import Contact from './Componentes/contact/Contact'
import User from './Componentes/user/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='/favorito' element={< Favorito/>}/>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='/profile' element={<User />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
