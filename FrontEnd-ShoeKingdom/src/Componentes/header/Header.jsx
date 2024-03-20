import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import CartBtn from './buttons/CartBtn';
import Favorito from './buttons/Favorito';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary bg-gradient navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container-fluid text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none fs-6" href="mailto:info@company.com">zapatillas@company.com</a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none fs-6" href="tel:010-020-0340">010-020-0340</a>
                        </div>
                        <div>
                            <a className="text-light mx-2" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                            <a className="text-light mx-2" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg bg-light bg-gradiente d-flex align-items-center shadow">
                <div className="container-fluid py-1 mx-auto justify-content-between">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto justify-content-between" id="navbarSupportedContent">

                    <NavLink className="navbar-brand  fw-bold " to="/">Zapatillas</NavLink> 

                        <ul className="navbar-nav mb-3 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Acerca</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Tienda</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contactanos</NavLink>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Login />
                            <Signup />
                            <Favorito />
                            <CartBtn />

                        </div>
                    </div>


                </div>
            </nav>
        </>
    );
}

export default Header;