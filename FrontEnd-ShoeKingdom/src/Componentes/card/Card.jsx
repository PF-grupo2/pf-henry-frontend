import DATA from "../../Data";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Favorito from "../buttons/Favorito";
import { addItem } from "../../../Redux/Actions/actions";
import React from "react";
import { utilsStorage } from "../utils";

import "./Card.css";

function Card({ zapatilla }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addItem);

  if (!zapatilla) {
    return null;
  }

  const { id, name, price, brand, images } = zapatilla;

  const handleCart = () => {
    const itemInCart = cartItems.find((item) => item.id === id);
    
    const item = zapatilla;
    item.quantity=1;
    item.selectedColor=zapatilla.color[0];
    item.selectedSize=zapatilla.size[0];
    utilsStorage.saveCartItem(item.id, item);

    if (itemInCart) {
      dispatch(id, itemInCart.quantity + 1);
    } else {
      dispatch(addItem(zapatilla));
    }
  };
  return (
    <>
      <div className="card card-body d-flex align-items-center justify-content-between">
        <div className="card_hover card-body text-center">
          <img className="imagen" src={images[0]} alt={name} />
          <h4>{name}</h4>
          <h5>$ {price} </h5>
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/cart">
              <span
                className="fa fa-shopping-cart me-1"
                onClick={handleCart}
              ></span>
            </Link>
            {/* Más detalles si es necesario */}
            <NavLink to={`/product/${id}`} className="btn btn-outline-primary">
              Ver detalles
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
}

export default Card;
