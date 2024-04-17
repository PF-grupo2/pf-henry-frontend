

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem, updateItemQuantity } from '../../../Redux/Actions/actions';
import { NavLink,useNavigate  } from 'react-router-dom';
import Cards from '../cards/Cards';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import { utilsStorage } from '../utils';



const Cart = () => {

    const token = utilsStorage.getDataStorage("token");

    const color = useRef();
    const size = useRef();


    const Navigate = useNavigate()
    // const navigateToCheckout = () => {
    //     window.open('/checkout', '_blank', 'noopener');
    // };

    //const cartItems = useSelector((state) => state.addItem);
    const cartItems = Object.values(utilsStorage.getCart());
    function total(){
        let price = 0;
        for (let i = 0; i < cartItems.length; i++) {
            price += (cartItems[i].price * cartItems[i].quantity);
        }
        return Math.ceil(price);
    }
    const dispatch = useDispatch();

    const [itemQuantities, setItemQuantities] = useState({});
    const [totalPrice, setTotalPrice] = useState(total());
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario está logueado


    const { isAuthenticated } = useAuth0();
    useEffect(() => {
        // Simular el inicio de sesión del usuario
        // Aquí deberías implementar tu lógica real para verificar si el usuario está logueado o no
        setIsLoggedIn(false); // Cambiar a `true` si el usuario está logueado
    }, []);

    // useEffect(() => {
    //     const newQuantities = {};
    //     cartItems.forEach(item => {
    //         newQuantities[item.id] = item.quantity;
    //     });
    //     setItemQuantities(newQuantities);
    // }, [cartItems]);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, item) => {
            const quantity = itemQuantities[item.id] || 0;
            return total + (quantity * item.price);
        }, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems, itemQuantities]);

    const handleClose = (item) => {
        utilsStorage.cleanCart(item.id);
        dispatch(delItem(item));
    };

    const handleIncreaseQuantity = (itemId) => {

        const item = utilsStorage.getCart(itemId);
        item.quantity+=1;
        utilsStorage.saveCartItem(itemId, item);

        const currentQuantity = itemQuantities[itemId] || 0;
        const updatedQuantity = currentQuantity + 1;
        setItemQuantities({ ...itemQuantities, [itemId]: updatedQuantity });
        dispatch(updateItemQuantity(itemId, updatedQuantity));
    };

    const handleDecreaseQuantity = (itemId) => {

        const item = utilsStorage.getCart(itemId);
        if(item.quantity>1) item.quantity-=1;
        utilsStorage.saveCartItem(itemId, item);

        const currentQuantity = itemQuantities[itemId] || 0;
        if (currentQuantity) {
            const updatedQuantity = currentQuantity - 1;
            setItemQuantities({ ...itemQuantities, [itemId]: updatedQuantity });
            dispatch(updateItemQuantity(itemId, updatedQuantity));
        }
    };

    const handlePreference = (itemId)=>{
        const item = utilsStorage.getCart(itemId);
        if(color)item.selectedColor = color.current.value;
        if(size)item.selectedSize = size.current.value;
        utilsStorage.saveCartItem(itemId, item);
    }

    const cartItemComponent = (item) => {
        const getItem = utilsStorage.getCart(item.id);
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
                            <div className='d-flex align-items-center'>
                                <button onClick={() => handleDecreaseQuantity(item.id)} className='btn btn-outline-primary me-2'>-</button>
                                <span>{getItem.quantity}</span>
                                <button onClick={() => handleIncreaseQuantity(item.id)} className='btn btn-outline-primary ms-2'>+</button>
                            </div>
                            <div>
                            <label>Color</label>
                            {item.color && (<select ref={color} onChange={()=>handlePreference(item.id)} defaultValue={item.color[0]}>
                                <optgroup>
                                    {item.color.map((color) => {return <option key={color} value={color}>{color}</option>})}
                                </optgroup>
                            </select>)}
                            </div>
                            <div>
                            <label>Talle</label>
                            {item.size && (<select ref={size} onChange={()=>handlePreference(item.id)} defaultValue={item.size[0]}>
                                <optgroup>
                                    {item.size.map((size) => {return <option key={size} value={size}>{size}</option>})}
                                </optgroup>
                            </select>)}
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4 emptyCart '>
                    <div className='row'>
                        <h3>Tu carrito está vacío</h3>
                    </div>
                    <NavLink to='/product/'><button className='btn btn-outline-primary'>Volver a la Tienda</button></NavLink>
                </div>
            </div>
        );
    };
    const checkoutButton = () => {
        const handleCheckout = () => {
            if (token) {
                // Si el usuario está logueado, redirigir a la página de checkout
                Navigate('/checkout');
                // navigateToCheckout();
            } else {
                // Si el usuario no está logueado, mostrar alerta con SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes iniciar sesión o registrarte para realizar el pago!'
                });
            }
        };

        return (
            <div className='container'>
                <div className='row'>
                    <h1>Total: ${total()}</h1>
                    <button onClick={handleCheckout} className='btn btn-outline-primary mb-5 w-25 mx-auto'>Realizar pago</button>
                </div>
            </div>
        );
    };

    return (
        <>
            {cartItems.length === 0 ? emptyCart() : cartItems.map(cartItemComponent)}
            {cartItems.length !== 0 && checkoutButton()}
        </>
    );
};

export default Cart;