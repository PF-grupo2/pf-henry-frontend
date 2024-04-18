import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../buttons/Login';
import Profile from '../buttons/Profile';
import CartBtn from '../buttons/CartBtn';
import Favorito from '../buttons/Favorito';
import SearchBar from '../searchBar/SearchBar';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import './Header.css'
import { utilsStorage } from '../utils';
import Swal from 'sweetalert2';


const Header = () => {
    const { isAuthenticated } = useAuth0();
    const [isMobile, setIsMobile] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    const { isAdmin, name } = utilsStorage.getDataStorage("userSession");
    const token = utilsStorage.getDataStorage("token");
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the threshold according to your needs
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isLogged]);

    const handleLogOut = () => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "Estás a punto de cerrar sesión.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, cerrar sesión',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            utilsStorage.removeDataStorage("token");
            utilsStorage.removeDataStorage("userSession");
            setIsLogged(false);
            navigate("/");
          }
        });
      }

    return (
        <>
            <section className="ftco-section">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active shipping-banner">
                            <p className='p-2'>¡Envío gratis a todo el país! </p>
                        </div>
                        <div className="carousel-item shipping-banner">
                            <p className='p-2'>¡Envío gratis a todo el país!</p>
                        </div>

                        <div className="carousel-item shipping-banner">
                            <p className='p-2'>¡Envío gratis a todo el país!</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                        <div className="container">
                            <a className="logo1" href="index.html">ShoeKingdom</a>
                            <div className="social-media order-lg-last">
                                <div className="  d-flex">
                                    {!isMobile && <SearchBar />}
                                    {isAuthenticated ? <div>
                                        <Profile />
                                    </div> : <div>
                                        <Login />
                                    </div>}
                                    {/* <div>
                                     <Favorito />   
                                    </div> */}

                                    <CartBtn />
                                </div>
                                <div>
                                    {token && (<button onClick={handleLogOut}>
                                        <span>Cerrar Sesion</span>
                                    </button>)}
                                </div>
                            </div>

                            <button className="navbar-toggler m-2" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav mb-3 mb-lg-0 ">
                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Inicio</NavLink>
                                    </li> */}
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">Acerca</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/product">Tienda</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contactanos</NavLink>
                                    </li>
                                    {!token && (<li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Registro</NavLink>
                                    </li>)}
                                    {!token && (<li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Ingresar</NavLink>
                                    </li>)}
                        
                                    {token && (<li className='nav-item'>
                                        <NavLink className="nav-link" to="/userprofile">Perfil</NavLink>
                                    </li>)}
                                    
                                    
                                     {isAdmin && (<li className="nav-item">
                                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                                    </li>)}

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Header;



{/* <nav className="navbar navbar-expand-lg bg-light bg-gradiente d-flex align-items-center shadow">
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

                        <div className='d-flex align-items-center justify-content-between'>
                            <SearchBar />
                            {isAuthenticated ? <div>
                                <Profile />
                            </div> : <div>
                                <Login />
                            </div>}
                            <Favorito />
                            <CartBtn />

                        </div>
                    </div>


                </div>
            </nav> */}