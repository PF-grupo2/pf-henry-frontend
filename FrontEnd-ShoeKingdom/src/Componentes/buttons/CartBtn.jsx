 import React from 'react'
 import { NavLink } from 'react-router-dom'
 import { useSelector } from 'react-redux'

const CartBtn = () => {
     const state = useSelector((state)=> state.addItem)
     console.log("lo que llega en el stado del carrito",state  )
     return (
         <>
         <NavLink to='/cart' className="btn ms-2 p-1">
             <span className='fa fa-shopping-cart me-1'></span>({state.length})
         </NavLink>
        
         </>
     )
  
}

export default CartBtn;