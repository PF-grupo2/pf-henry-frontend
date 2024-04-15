// import React from 'react';
// import { useSelector } from 'react-redux';

// const Checkout = () => {


//     return (
//         <>
//        <div className="container my-5">
//                 <div className="row g-5">
//                     <div className="col-md-5 col-lg-4 order-md-last">
//                         <h4 className="d-flex justify-content-between align-items-center mb-3">
//                             <span className="text-primary">Your cart</span>
//                             <span className="badge bg-primary rounded-pill">{0}</span>
//                         </h4>
//                         <ul className="list-group mb-3">
                       

//                             <li className="list-group-item d-flex justify-content-between">
//                                 <span>Total (USD)</span>
//                                 <strong>20</strong>
//                             </li>
//                         </ul>

//                         <form className="card p-2">
//                             <div className="input-group">
//                                 <input type="text" className="form-control" placeholder="Promo code" />
//                                 <button type="submit" className="btn btn-secondary">Redeem</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="col-md-7 col-lg-8">
//                         <h4 className="mb-3">Billing address</h4>
//                         <form className="needs-validation" novalidate="">
//                             <div className="row g-3">
//                                 <div className="col-sm-6">
//                                     <label htmlFor="firstName" className="form-label">First name</label>
//                                     <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
//                                     <div className="invalid-feedback">
//                                         Valid first name is required.
//                                     </div>
//                                 </div>

//                                 <div className="col-sm-6">
//                                     <label htmlFor="lastName" className="form-label">Last name</label>
//                                     <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
//                                     <div className="invalid-feedback">
//                                         Valid last name is required.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="username" className="form-label">Username</label>
//                                     <div className="input-group has-validation">
//                                         <span className="input-group-text">@</span>
//                                         <input type="text" className="form-control" id="username" placeholder="Username" required="" />
//                                         <div className="invalid-feedback">
//                                             Your username is required.
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
//                                     <input type="email" className="form-control" id="email" placeholder="you@example.com" />
//                                     <div className="invalid-feedback">
//                                         Please enter a valid email address htmlFor shipping updates.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="address" className="form-label">Address</label>
//                                     <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
//                                     <div className="invalid-feedback">
//                                         Please enter your shipping address.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
//                                     <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
//                                 </div>

//                                 <div className="col-md-5">
//                                     <label htmlFor="country" className="form-label">Country</label>
//                                     <select className="form-select" id="country" required="">
//                                         <option value="">Choose...</option>
//                                         <option>United States</option>
//                                     </select>
//                                     <div className="invalid-feedback">
//                                         Please select a valid country.
//                                     </div>
//                                 </div>

//                                 <div className="col-md-4">
//                                     <label htmlFor="state" className="form-label">State</label>
//                                     <select className="form-select" id="state" required="">
//                                         <option value="">Choose...</option>
//                                         <option>California</option>
//                                     </select>
//                                     <div className="invalid-feedback">
//                                         Please provide a valid state.
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label htmlFor="zip" className="form-label">Zip</label>
//                                     <input type="text" className="form-control" id="zip" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Zip code required.
//                                     </div>
//                                 </div>
//                             </div>

//                             <hr className="my-4" />

//                             <div className="form-check">
//                                 <input type="checkbox" className="form-check-input" id="same-address" />
//                                 <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
//                             </div>

//                             <div className="form-check">
//                                 <input type="checkbox" className="form-check-input" id="save-info" />
//                                 <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
//                             </div>

//                             <hr className="my-4" />

//                             <h4 className="mb-3">Payment</h4>

//                             <div className="my-3">
//                                 <div className="form-check">
//                                     <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
//                                     <label className="form-check-label" htmlFor="credit">Credit card</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
//                                     <label className="form-check-label" htmlFor="debit">Debit card</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
//                                     <label className="form-check-label" htmlFor="paypal">PayPal</label>
//                                 </div>
//                             </div>

//                             <div className="row gy-3">
//                                 <div className="col-md-6">
//                                     <label htmlFor="cc-name" className="form-label">Name on card</label>
//                                     <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
//                                     <small className="text-muted">Full name as displayed on card</small>
//                                     <div className="invalid-feedback">
//                                         Name on card is required
//                                     </div>
//                                 </div>

//                                 <div className="col-md-6">
//                                     <label htmlFor="cc-number" className="form-label">Credit card number</label>
//                                     <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Credit card number is required
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label htmlFor="cc-expiration" className="form-label">Expiration</label>
//                                     <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Expiration date required
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label htmlFor="cc-cvv" className="form-label">CVV</label>
//                                     <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Security code required
//                                     </div>
//                                 </div>
//                             </div>

//                             <hr className="my-4" />


                            

//                             <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Checkout;





import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";




function Cheackout() {

    //let total = 0
  const [preferenceId, setPreferenceId] = useState(null)
  initMercadoPago("TEST-6f69cc86-29f8-4b46-b7f9-e7e3a12e3b1a",{
    locale: "es-AR",
  });


  

  const zapasCheckout = useSelector((state) => state.addItem);
  console.log("este el estado global de addItem:", zapasCheckout);

  const orderData = zapasCheckout.map(shoe => {
    return {
        id: shoe.id,
        title: shoe.name,
        description: shoe.description,
        picture_url: shoe.images[0],
        quantity: shoe.quantity,
        unit_price: shoe.price
    }
})




  
const createPreference = async ()=>{
  console.log(orderData);
  try {
    const response = await axios.post("http://localhost:3000/api/v1/mercadopago",{
      items: orderData
    })
    const {id} = response.data
    return id
    
  } catch (error) {
    console.log(error);
    
  }
}

  
  

  


  const handleBuy = async()=>{
    const idPreference = await createPreference()
    console.log("handlebuy: ",idPreference);
    if(idPreference){
      setPreferenceId(idPreference)
    }
  }

  return (


    <div >
   
            <button onClick={handleBuy}>Pagar</button>
            {preferenceId && <Wallet initialization={{preferenceId: preferenceId}}/>}
            
    </div>
    
    

  );
}

export default Cheackout;