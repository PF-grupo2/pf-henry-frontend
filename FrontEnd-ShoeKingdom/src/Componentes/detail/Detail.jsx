import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail,clearDetail } from "../../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import DATA from '../../Data';
import './Detail.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const zapatillas = useSelector((state) => state.zapatillaDetail);
  console.log("este el estado global de",zapatillas);

  

  useEffect(() => {
    //dispatch(removeDetail());
    dispatch(getDetail(id));
  }, [dispatch,id]);
  

  const handleClick = (e) => {
    dispatch(clearDetail());
  };

  return (
    // <div className="product-detail-container">
    //   <h4 className="product-detail-heading">Detalles del Producto</h4>
    //   <div className="product-detail-info">
    //     <h4 className="product-detail-info-item">Nombre: {zapatillas.name}</h4>
    //     <h4 className="product-detail-info-item">Precio: {zapatillas.price}</h4>
    //     <h4 className="product-detail-info-item">Descripción: {zapatillas.description}</h4>
    //     <h4 className="product-detail-info-item">Stock: {zapatillas.stock}</h4>
    //     <h4 className="product-detail-info-item">Marca: {zapatillas.brand}</h4>
    //     <Link to="/checkout"><button className="btn btn-outline-primary">Agregar al carrito</button></Link>
    //   </div>
    //   <div className="product-detail-images">
    //     {zapatillas.images && zapatillas.images.length > 0 && (
    //       <img className="product-detail-image" src={zapatillas.images[0]} alt={zapatillas.name} />
    //     )}
    //   </div>

    //   <div className="product-detail-home-btn">
    //     <Link to="/product"><button onClick={(e) => handleClick(e)} className="btn btn-outline-secondary">Volver a la Tienda</button></Link>
    //   </div>
    // </div>

    <div className="container my-5 py-3">
    <div className="row">
    
        <div className="col-md-5 d-flex justify-content-center mx-auto product">
            {zapatillas.images && zapatillas.images.length > 0 && (
                <img className="product-detail-image" src={zapatillas.images[0]} alt={zapatillas.name} height="350px" />
            )}
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">Nombre: {zapatillas.name}</h1>
            <h2 className="my-4">Precio: {zapatillas.price}</h2>
            <p className="lead">Descripción: {zapatillas.description}</p>
            <p className="lead">Stock: {zapatillas.stock}</p>
            <p className="lead">Marca: {zapatillas.brand}</p>
            <div>
                <Link to="/cart"><button  onClick={()=>handleCart(product)} className="btn btn-outline-primary mx-3">Agregar al carrito</button></Link>
                <Link to="/product"><button onClick={(e) => handleClick(e)} className="btn btn-outline-secondary">Volver a la Tienda</button></Link>
            </div>
        </div>
    
    </div>
    
    </div>

    <div className="product-detail-container">
      <h4 className="product-detail-heading">Detalles del Producto</h4>
      <div className="product-detail-info">
        <h4 className="product-detail-info-item">Nombre: {zapatillas.name}</h4>
        <h4 className="product-detail-info-item">Precio: {zapatillas.price}</h4>
        <h4 className="product-detail-info-item">Descripción: {zapatillas.description}</h4>
        <h4 className="product-detail-info-item">Stock: {zapatillas.stock}</h4>
        <h4 className="product-detail-info-item">Marca: {zapatillas.brand}</h4>
        <Link to="/checkout"><button className="btn btn-outline-primary">Agregar al carrito</button></Link>
      </div>
      <div className="product-detail-images">
        {zapatillas.images && zapatillas.images.length > 0 && (
          <img className="product-detail-image" src={zapatillas.images[0]} alt={zapatillas.name} />
        )}
      </div>

      <div className="product-detail-home-btn">
        <Link to="/product"><button onClick={(e) => handleClick(e)} className="btn btn-outline-secondary">Volver a la Tienda</button></Link>
      </div>
    </div>
  );
}

export default ProductDetail;