import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Componentes/header/Header";
import Footer from "./Componentes/footer/Footer";
import Home from "./Componentes/home/Home";
import About from "./Componentes/about/About";
import Product from "./Componentes/product/Product";
import ProductDetail from "./Componentes/detail/Detail";
import Cart from "./Componentes/cart/Cart";
import Checkout from "./Componentes/checkout/Checkout";
import Favorito from "./Componentes/favorites/Favorites";
import Contact from "./Componentes/contact/Contact";
import Dashboard from "./Componentes/dashboard/Dashboard";
import User from "./Componentes/page/User";
import Products from "./Componentes/page/Products";
import Users from "./Componentes/page/Users";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorito" element={<Favorito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
