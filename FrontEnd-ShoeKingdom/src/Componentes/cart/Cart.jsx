import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../../../Redux/Reducers/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const state = useSlector((state) => state.addItem);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item))
    };
    
    return (
        <div></div>
    )
}

export default Cart;