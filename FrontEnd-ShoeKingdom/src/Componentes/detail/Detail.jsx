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