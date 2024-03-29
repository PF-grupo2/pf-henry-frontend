import DATA from '../../Data'
import {NavLink} from 'react-router-dom';
import CartBtn from '../buttons/CartBtn';
import Favorito from '../buttons/Favorito';
import './Card.css';

// const cardItem = (item) =>{

//     console.log("a card", item);
    
//     return (
//             <div className="card my-3 py-2" key={item.id} style={{ width: "18rem" }}>
//                 <div className='d-flex align-items-center justify-content-between'>
//                 <span className='fa fa-shopping-cart me-1'></span>
//                 <span className='fa fa-heart me-1'></span>
//                 </div>
                
//                 <img src={item.images[0]} className="card-img-top imagen" alt={item.name} />
//                 <div class="card-body text-center">
//                     <h5 class="card-title">{item.name}</h5>
//                     <p className="lead">${item.price}</p>
//                     <NavLink to={`/product/${item.id}`} className="btn btn-outline-primary">Ver detalles</NavLink>
//                 </div>
//             </div>
//         );
  
// }

//export default cardItem


import React from 'react';
import './Card.css';


function Card({ zapatilla }) {

  if (!zapatilla) {
    return null; 
  }

  const {id, name, price, description,stock, offer, scoreAvg, status, brand, images } = zapatilla;

  // console.log("estoy en card", zapatilla)

  return (
    <>
      <div className='card card-body d-flex align-items-center justify-content-between'>
    
        <div className='card_hover card-body text-center' >
        <div className='d-flex align-items-center justify-content-between'>
                 <span className='fa fa-shopping-cart me-1'></span>
                 <span className='fa fa-heart me-1'></span>
                 </div>
            <img className='imagen' src={images[0]}  />
            <p>Nombre: {name} </p>
            <p>precio: {price} </p>
         

            {/* <NavLink to={`/product/${id}`}><button className='boton1'><i className="fa-solid fa-eye"></i></button></NavLink> */}
            <NavLink to={`/product/${id}`} className="btn btn-outline-primary">Ver detalles</NavLink>
     
      
      </div>
      </div>
    </>
  );
}

export default Card;