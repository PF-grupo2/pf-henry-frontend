import DATA from '../../Data'
 import {NavLink, Link} from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
 import Favorito from '../buttons/Favorito';
 import { addItem } from '../../../Redux/Actions/actions';
 import React from 'react';

 import './Card.css'

 function Card({ zapatilla }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.addItem);

   if (!zapatilla) {
     return null;
   }

   const { id, name, price, brand, images } = zapatilla;

   const handleCart = () => {
     const itemInCart = cartItems.find(item => item.id === id);

     if (itemInCart) {
       dispatch(id, itemInCart.quantity + 1);
     } else {
       dispatch(addItem(zapatilla));
     
     }
   };
   return (
     <>
       <div className='card card-body d-flex align-items-center justify-content-between'>
         <div className='card_hover card-body text-center'>
           <div className='d-flex align-items-center justify-content-between'>
           <Link to="/cart">
             <span className='fa fa-shopping-cart me-1' onClick={handleCart}></span>
             </Link>
             {/* Agregamos el onClick en el icono de carrito para manejar la lógica de agregar al carrito */}
             <span className='fa fa-heart me-1'></span>
           </div>
           <img className='imagen' src={images[0]} alt={name} />
           <p>Nombre: {name} </p>
           <p>Precio: {price} </p>
           {/* Más detalles si es necesario */}
           <NavLink to={`/product/${id}`} className="btn btn-outline-primary">Ver detalles</NavLink>
         </div>
       </div>
     </>
   );
 }

 export default Card;

