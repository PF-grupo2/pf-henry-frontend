import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, addItem, delItem } from "../../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import DATA from '../../Data';
import './Detail.css';


function ProductDetail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const zapatillas = useSelector((state) => state.zapatillaDetail);
    console.log("este el estado global de", zapatillas);
    const [cartBtn, setCartBtn] = useState("Add to Cart")



    useEffect(() => {
        //dispatch(removeDetail());
        dispatch(getDetail(id));
    }, [dispatch, id]);

    const handleCart = (zapatillas) => {
        console.log("loque atrapa el detail", zapatillas)
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(zapatillas))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delItem(zapatillas))
            setCartBtn("Add to Cart")
        }
    }

    const handleClick = (e) => {
        if(!user)
        {
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
                        <p className="lead">Descripción: {zapatillas.description}</p>
                        <p className="lead">Stock: {zapatillas.stock}</p>
                        <p className="lead">Marca: {zapatillas.brand}</p>
                        <div>
                            <Link to="/cart"><button onClick={() => handleCart(zapatillas)} className="btn btn-outline-primary mx-3">Agregar al carrito</button></Link>
                            <Link to="/product"><button onClick={(e) => handleClick(e)} className="btn btn-outline-secondary">Volver a la Tienda</button></Link>
                        </div>
                    </>
                )}
                </div>
            </div>

        </div>


















    );
}

export default ProductDetail;