import './NavBar.css';
import { NavLink } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import CartBtn from '../buttons/CartBtn';
import Favorito from '../buttons/Favorito';
import Login from '../buttons/Login';
import Signup from '../buttons/Signup';
import Logo from '../images/Logo.png';
import { useDispatch } from 'react-redux';
//import { getAllProducts } from '../../../Redux/Actions/actions';

const NavBar = () => {
    // const dispatch = useDispatch();
    // const handleClick = (event) => {
    //     dispatch(getAllProducts());
    // };

    return (
        <nav className='nav'>
            <img className='image' src={Logo} />{/*onClick={handleClick} */}
            <NavLink className='navLink' to='/'>Inicio</NavLink>
            <NavLink className='navLink' to='/about'>Acerca</NavLink>
            <NavLink className='navLink' to='/product'>Tienda</NavLink>
            <NavLink className='navLink' to='/contact'>Contactanos</NavLink>
            <SearchBar />
            <Login />
            <Signup />
            <Favorito />
            <CartBtn />
        </nav>
    )
}

export default NavBar;