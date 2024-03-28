// const NavBar = () =>{
//     <div>esto es NavBar</div>
// }

// export default NavBar

import './NavBar.css';
import SearchBar from '../searchBar/SearchBar';
import CartBtn from '../buttons/CartBtn';
import Favorito from '../buttons/Favorito';
import Login from '../buttons/Login';
import Signup from '../buttons/Signup';
import Logo from '../../../public/assets/Logo.png';



const NavBar = () =>{
    return (
        <nav className='nav'>
             <img className='image' src={Logo}/>
             <h12>Inicio</h12>
             <br></br>
             <h12>Acerca</h12>
             <br></br>
             <h12>Contáctanos</h12>
            <SearchBar />
            <Login />
            <Signup />
            <Favorito />
            <CartBtn/>
        </nav>
    )
}

export default NavBar;