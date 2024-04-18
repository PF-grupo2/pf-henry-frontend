
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { utilsStorage } from "../utils";
import './Checkout.css';
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../config";


function Cheackout() {
  const token = utilsStorage.getDataStorage("token");

  //let total = 0

  const [preferenceId, setPreferenceId] = useState(null)
  initMercadoPago("TEST-292925ac-3601-49db-8eb5-5dbc8bfaeaea"
    , {
      locale: "es-AR",
    });





  // const zapasCheckout = useSelector((state) => state.addItem);
  const zapasCheckout = Object.values(utilsStorage.getCart());
  console.log("este el estado global de addItem:", zapasCheckout);

  const orderData = zapasCheckout.map((shoe) => {
    return {
      id: shoe.id,
      title: `${shoe.name} || Color: ${shoe.selectedColor}, Talle: ${shoe.selectedSize}`,
      description: shoe.description,
      picture_url: shoe.images[0],
      quantity: shoe.quantity,
      unit_price: shoe.price
    }
  })

  const createPreference = async () => {
    console.log("esto es lo q llega de order data", orderData);
    try {
      //"http://localhost:3000/api/v1/mercadopago"
      //https://pf-henry-backend.onrender.com/api/v1/mercadopago
      //https://test-backend-u5ie.onrender.com/api/v1/mercadopago
      //https://pf-henry-backend-agsr.onrender.com/api/v1/mercadopago


      const response = await axios.post(`${BASE_URL}/mercadopago`, {
        items: orderData

      },{
        headers: { "x-token": token },
      })
      console.log("esta es la respuesta", response);
      const { id } = response.data
      return id

    } catch (error) {
      console.log("este es el:", error.message);

    }
  }

  const handleBuy = async () => {
    const idPreference = await createPreference()
    for (let i = 0; i < zapasCheckout.length; i++) {
      await axios.put(`http://localhost:3000/api/v1/products/stock/${zapasCheckout[i].id}/${zapasCheckout[i].quantity}`, { headers: { 'x-token': token } })
    }
    console.log("handlebuy: ", idPreference);
    if (idPreference) {

      setPreferenceId(idPreference)


    }
    utilsStorage.cleanCart();
  };

  return (
    // <div className="containerpagar">
    //   <button className="btn btn-primary" onClick={handleBuy}>Pagar</button>
    //   {preferenceId && <Wallet class="mt-3" initialization={{ preferenceId: preferenceId }} />}
    // </div>
    <div className="containerpagar">
      <div className='procesar-pago' >
        <h1 >Procesar pago</h1>
        <button className="btn btn-outline-dark mx-4" onClick={handleBuy}>Pagar</button>
        {preferenceId && <Wallet class="mt-3" initialization={{ preferenceId: preferenceId }} />}
      </div>
    </div>

  );
}

export default Cheackout;
