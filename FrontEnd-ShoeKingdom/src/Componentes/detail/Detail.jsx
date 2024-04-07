import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, addItem, delItem, updateItemQuantity } from "../../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import DATA from '../../Data';
import './Detail.css';

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const zapatillas = useSelector((state) => state.zapatillaDetail);
    const cartItems = useSelector((state) => state.addItem); // Obtener el estado del carrito

    console.log("este el estado global de", zapatillas);

    const [cartBtn, setCartBtn] = useState("Add to Cart");

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    const handleCart = () => {
        console.log("loque atrapa el detail", zapatillas);
        const itemInCart = cartItems.find(item => item.id === zapatillas.id);

        if (itemInCart) {
            dispatch(updateItemQuantity(zapatillas.id, itemInCart.quantity + 1));
        } else {
            dispatch(addItem(zapatillas));
        }
    };

    const handleClick = (e) => {
        if (!user) {
            dispatch(clearDetail());
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
                            <h1 className="display-5 fw-bold">Nombre: {zapatillas.name}</h1>
                            <h2 className="my-4">Precio: {zapatillas.price}</h2>
                            <p className="lead">DescripciÃ³n: {zapatillas.description}</p>
                            <p className="lead">Stock: {zapatillas.stock}</p>
                            <p className="lead">Marca: {zapatillas.brand}</p>
                            <div>
                                <Link to="/cart">
                                    <button onClick={handleCart} className="btn btn-outline-primary mx-3">
                                        {cartBtn}
                                    </button>
                                </Link>
                                <Link to="/product">
                                    <button onClick={handleClick} className="btn btn-outline-secondary">Volver a la Tienda</button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;