import React from 'react'
import { useState, useEffect } from "react";
import { utilsStorage } from '../utils';
import { NavLink } from 'react-router-dom';

function user() {
  const [users, setUsers] = useState([]);
  const user = utilsStorage.getDataStorage("userSession");
  console.log("users")
  return (
    <div className='contenedor-home p-2'>

    <div className='home-admin' >
        <h1 >Bienvenido</h1>
        <h3 className='usuario-admin'>{ user.name }</h3><br/>
        <NavLink to="/"><button className="btn btn-outline-primary mx-4">Ir Home Ecommerce</button></NavLink>
        
    </div>

 

  </div>
  )
}

export default user