import { NavLink } from 'react-router-dom';
import Login from '../buttons/Login';
import Signup from '../buttons/Signup';
import CartBtn from '../buttons/CartBtn';
import Favorito from '../buttons/Favorito';

const Header = () => {
    return (
        <>
                <nav className="navbar navbar-expand-lg bg-light bg-gradiente d-flex align-items-center shadow">
                <div className="container-fluid py-1 mx-auto justify-content-between">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto justify-content-between" id="navbarSupportedContent">

                    <NavLink className="navbar-brand  fw-bold " to="/"> <h1 className='h4'>ShoeKingdom</h1></NavLink> 

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

                        {/* <div class="d-flex">
                                    <div class="input-group mb-3">
                                         <i class="fa fa-search p-2" aria-hidden="true"></i>
                                        <input type="text" class="form-control" placeholder="Buscar por nombre o marca" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                    </div>
                        </div> */}

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