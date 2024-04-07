import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';
import './Modal.css'


const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
            <button type="button" className="btn ms-2 p-1" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-circle-o me-1'></span>
            </button>
            <div className="modal fade" id="signupModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Mi perfil</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                     

                            {isAuthenticated ? <div className="modal-body modal-style">
                                <img src={user.picture} alt={user.name} />
                                <h3 className='text-dark'>{user.name}</h3>
                                <p className='text-dark'>{user.email}</p>
                                <Logout />
                            </div> : null}
                    
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;