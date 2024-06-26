import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {

    const { logout } = useAuth0();

    return (
        <button onClick={() => logout()} className="btn btn-outline-primary mx-2">Cerrar sesión</button>
    )
}

export default Logout;