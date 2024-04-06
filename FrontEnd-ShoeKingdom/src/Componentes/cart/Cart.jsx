import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../../../Redux/Actions/actions';
import { NavLink } from 'react-router-dom';
import Cards from '../cards/Cards'

const Cart = () => {


    const state = useSelector((state)=> state.addItem)
    console.log("que trae", state);
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    
    const handleUser= (e) =>{
        dispatch(verificar_usuarios(e))
    }





    const cartItems = (item) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={item.id}>
                <div className='container py-4'>
                    <button onClick={() => handleClose(item)} className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={item.images[0]} alt={item.name} height='200px' width='180px' />
                        </div>
                        <div className='col-md-4'>
                            <h3>{item.name}</h3>
                            <p className='lead fw-bold'>${item.price}</p>
                        </div>
                    </div>
                </div>
               
                {/* <NavLink to="/product"><button className="btn btn-outline-secondary">Volver a la Tienda</button></NavLink> */}
            </div>
        )
    };

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Tu carrito está vacío</h3>
                    </div>
                    <NavLink  to="/product/"><button className="btn btn-outline-primary">Volver a la Tienda</button></NavLink >
                </div>
            </div>
        )
    };

    const button = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto' onClick={(e) => handleUser(e)}>Realizar pago</NavLink>
                </div>
            </div>
        )
    };

    return (
        <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}

{/* 
    {Array.isArray(state) && state.length === 0 && emptyCart()}
    {Array.isArray(state) && state.length !== 0 && state.map(cartItems)}
    {Array.isArray(state) && state.length !== 0 && button()} */}

        </>
    )
};

export default Cart;