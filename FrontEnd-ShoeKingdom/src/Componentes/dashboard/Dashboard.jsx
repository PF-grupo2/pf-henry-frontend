import React from 'react';
import './Dashboard.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Products from '../page/Products';
 

import User from '../page/User';
function Dashboard() {
  const {pathname} = useLocation()

  console.log(pathname)
  return (
    <div>
     
     <div className='flex'>
        <Sidebar/>
        <div className='content'>
          {pathname === "/admin/users" && <User/>}
          {pathname === "/admin/products" && <Products/>}

        </div>
     </div>

    </div>
  );
}

export default Dashboard;