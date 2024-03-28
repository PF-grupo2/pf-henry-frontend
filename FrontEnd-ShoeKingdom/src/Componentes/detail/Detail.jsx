import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DATA from '../../Data';
import './Detail.css';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../../../Redux/Actions/actions'

function ProductDetail() {
    const { id } = useParams();
    const [zapatillas, setZapatillas] = useState({});

    useEffect(() => {
        const foundZapatillas = DATA.find((shoe) => shoe.id === parseInt(id));

        if (foundZapatillas) {
            setZapatillas(foundZapatillas);
        } else {
            alert("No se encontraron zapatillas con ese ID");
        }

        return () => setZapatillas({});
    }, [id]);

        // We need to store useDispatch in a variable
        const dispatch = useDispatch()

        const handleCart = (product) => {
            if (cartBtn === "Add to Cart") {
                dispatch(addItem(product))
                setCartBtn("Remove from Cart")
            }
            else{
                dispatch(delItem(product))
                setCartBtn("Add to Cart")
            }
        }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">

                    <div className="col-md-5 d-flex justify-content-center mx-auto product">
                        {zapatillas.images && zapatillas.images.length > 0 && (
                            <img className="product-detail-image" src={zapatillas.images[0]} alt={zapatillas.name} height="350px" />
                        )}
                    </div>
                    <div className="col-md-7 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">Nombre: {zapatillas.name}</h1>
                        <h2 className="my-4">Precio: {zapatillas.price}</h2>
                        <p className="lead">Descripción: {zapatillas.description}</p>
                        <p className="lead">Stock: {zapatillas.stock}</p>
                        <p className="lead">Marca: {zapatillas.brand}</p>
                        <div>
                            <Link to="/cart"><button  onClick={()=>handleCart(product)} className="btn btn-outline-primary mx-3">Agregar al carrito</button></Link>
                            <Link to="/product"><button  className="btn btn-outline-secondary">Volver a la Tienda</button></Link>
                        </div>
                    </div>

                </div>

            </div>

        </>

    );
}

export default ProductDetail;