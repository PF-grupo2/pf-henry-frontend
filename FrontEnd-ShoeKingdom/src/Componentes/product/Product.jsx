import DATA from '../../Data'
import Card from '../card/Card'
import Cards from '../cards/Cards'
import '/public/assets/js/ecommerce.js';
import '/public/assets/css/ecommerce.css'
import Filter from '../filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getZapatilla } from '../../../Redux/Actions/actions';
// import * as actions from '../../../Redux/Actions/categories';
// const { getZapatilla } = actions;




const Product = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const  zapatilla = useSelector((state) => state.zapatilla);
    const  allZapatillas = useSelector((state) => state.allZapatilla);

    console.log("lo que llega de reducer al product", filter)
    console.log("lo que llega de reducer al product", zapatilla)
    console.log("lo que llega de reducer al product", allZapatillas)

    useEffect(() => {
        dispatch(getZapatilla());
      }, [dispatch]);
    
 
    return (
        <div>
            <div className="container-fluid">
                <div class="row">
               
            <div class="col-lg-3 izquierda py-5 px-5">
                <h2 class="h3 pb-4">Categorias</h2>
                <Filter/>
            </div>

                    <div class="col-lg-9 justify-content-center align-items-center align-items-center">

                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-inline shop-top-menu pb-3 pt-1">
                               
                                </ul>
                            </div>
                            {/* <div class="col-md-6 pb-4 py-5">
                                <div class="d-flex">
                                    <div class="input-group mb-3">
                                         <i class="fa fa-search p-3" aria-hidden="true"></i>
                                        <input type="text" class="form-control" placeholder="Buscar por nombre o marca" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row justify-content-around">
                             < Cards allZapatillas={filter ? zapatilla : allZapatillas} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product