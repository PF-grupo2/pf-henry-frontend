 import React from 'react'
 import { NavLink } from 'react-router-dom'
 import { useSelector } from 'react-redux'

const CartBtn = () => {
     const state = useSelector((state)=> state.addItem)
     return (
         <>
         <NavLink to='#' className="btn ms-2 p-1">
             <span className='fa fa-shopping-cart me-1'></span>({0})
         </NavLink>
        
         </>
     )
  
}

export default CartBtn;