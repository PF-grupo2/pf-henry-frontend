import { NavLink } from 'react-router-dom';
import './Cart.css';

const Login = () => {
    return (
        <div>
            <NavLink to="/login">
                <button type="button" className="ButtonCart">
                    <span className='fa fa-sign-in me-1'></span>
                </button>
            </NavLink>
        </div>
    )
}

export default Login