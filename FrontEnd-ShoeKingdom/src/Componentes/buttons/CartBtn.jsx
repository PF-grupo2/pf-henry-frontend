import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { utilsStorage } from '../utils';

const CartBtn = () => {
    const navigate = useNavigate()
    const state = useSelector((state) => state.addItem)
    const numItems = Object.keys(utilsStorage.getCart()).length
    console.log("lo que llega en el stado del carrito", state)

    const handleSubmit = (event) => {
        event.preventDefault();
        //if (name.length) {


        navigate('/cart')
        // }
    }

    return (
        <>

            <form onSubmit={(event) => handleSubmit(event)}>

                <button className='ButtonCart ' type='submit'>  <span className='fa fa-shopping-cart me-1'></span>({numItems})</button>

            </form>
        </>
    )
}

export default CartBtn;
