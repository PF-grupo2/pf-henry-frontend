import { useAuth0 } from '@auth0/auth0-react';
import './Cart.css';
const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <button onClick={() => loginWithRedirect()} type="button" className="ButtonCart" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className='fa fa-sign-in me-1'></span>
            </button>
        </div>
       
    )

    
}

export default Login;