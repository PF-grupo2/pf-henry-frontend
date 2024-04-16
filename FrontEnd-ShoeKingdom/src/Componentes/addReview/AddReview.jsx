import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AddReview = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <div className="modal-body modal-style">
                <div class="mb-3">
                    <h5 className="fw-bold mb-4 h5">Contanos que te pareció tu producto</h5>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='Mi producto me pareció...'></textarea>
                    <button type='submit' className="btn btn-outline-primary mx-2">Guardar</button>
                </div>
            </div> : null}
        </>

    )
}

export default AddReview;