import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, clearDetail, addItem, updateItemQuantity } from "../../../Redux/Actions/actions";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Reviews from '../reviews/Reviews';

function ProductDetail() {
    const { id } = useParams();
    const user = useSelector(state => state.user); // Aquí obtienes la información del usuario del estado Redux
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const zapatillas = useSelector((state) => state.zapatillaDetail);
    const cartItems = useSelector((state) => state.addItem);
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState(null);
    const itemInCart = zapatillas && cartItems?.find(item => item.id === zapatillas?.id);

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    const [cartBtn, setCartBtn] = useState("Add to Cart");

    useEffect(() => {
        if (cartItems.find(item => item?.id === zapatillas?.id)) {
            setCartBtn("Item in Cart");
        } else {
            setCartBtn("Add to Cart");
        }
    }, [cartItems, zapatillas]);

    useEffect(() => {
        const fetchAccessToken = async () => {
            if (isAuthenticated) {
                try {
                    const token = await getAccessTokenSilently();
                    setAccessToken(token);
                } catch (error) {
                    console.error('Error fetching access token:', error);
                }
            }
        };

        fetchAccessToken();
    }, [isAuthenticated, getAccessTokenSilently]);

    const handleCart = async () => {
        if (zapatillas) {
            const itemInCart = cartItems?.find(item => item.id === zapatillas?.id);
            if (itemInCart) {
                dispatch(updateItemQuantity(zapatillas?.id, itemInCart?.quantity + 1));
            } else {
                if (isAuthenticated) {
                    if (user && user.isAdmin) {
                        // Lógica para manejar el carrito para usuarios administradores
                    } else {
                        // Lógica para manejar el carrito para usuarios normales
                        try {
                            await saveCartToDatabase(cartItems, accessToken);
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Product added!",
                                showConfirmButton: true,
                                timer: 2500,
                            });
                            navigate("/cart");
                        } catch (error) {
                            console.error('Error saving cart to database:', error);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'There was an error adding the product to the cart and saving it to the database. Please try again.'
                            });
                        }
                    }
                } else {
                    dispatch(addItem(zapatillas));
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product added!",
                        showConfirmButton: true,
                        timer: 2500,
                    });
                    navigate("/cart");
                }
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to add product to cart. Please try again.'
            });
        }
    };

    const saveCartToDatabase = async (cartItems, token) => {
        try {
            const response = await axios.post(
                "https://pf-henry-backend-agsr.onrender.com/api/v1/shoppingCart",
                { items: cartItems },
                {
                    headers: {
                        "x-token": token
                    }
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const handleClick = () => {
        if (!isAuthenticated) {
            dispatch(clearDetail());
            navigate("/"); 
        }
    };

    return (
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center mx-auto product">
                    {zapatillas && zapatillas.images && zapatillas.images.length > 0 && (
                        <img className="product-detail-image" src={zapatillas.images[0]} alt={zapatillas.name} height="350px" />
                    )}
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    {zapatillas && (
                        <>
                            <h1 className="display-5 fw-bold">Name: {zapatillas.name}</h1>
                            <h2 className="my-4">Price: {zapatillas.price}</h2>
                            <p className="lead">Description: {zapatillas.description}</p>
                            <p className="lead">Stock: {zapatillas.stock}</p>
                            <p className="lead">Brand: {zapatillas.brand}</p>
                            <div>
                                <button onClick={handleCart} className="btn btn-outline-primary mx-3">
                                    {cartBtn}
                                </button>
                                <button onClick={handleClick} className="btn btn-outline-secondary">Back to Store</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="col-lg-6 m-auto">
              <div>
              <h3 className="fw-bold mb-4 h3">Opiniones del producto</h3>
              </div>
            <Reviews productId={id}/>
            </div>
        </div>
        
    );
}

export default ProductDetail;
