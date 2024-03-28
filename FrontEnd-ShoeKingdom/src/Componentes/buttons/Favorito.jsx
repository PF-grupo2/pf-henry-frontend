 import React from 'react'
 import { NavLink } from 'react-router-dom'
 import { useSelector } from 'react-redux'

const Favorito = () => {
     const state = useSelector((state)=> state.addItem)
     return (
         <>
         <NavLink to='/favorito' className="btn ms-2 p-1">
             <span className='fa fa-heart me-1'></span>({0})
         </NavLink>
         
         </>
     )
  
}

export default Favorito