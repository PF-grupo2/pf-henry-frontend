
import { ADDITEM, DELITEM} from "./action-types";
const URL_SEARCHBAR = 'http://localhost:3001/api/v1/products/search';



import axios from "axios";
import DATA from '../../src/Data';
import React, { useState, useEffect } from 'react';

export const GET_ZAPATILLAS = "GET_ZAPATILLAS";
export const FILTER = "FILTER";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const LOADING = 'LOADING';



export const getfilter = (nombre) => {
  console.log("acción de categorías");
  return async function(dispatch){
  
    const filteredData = await (await axios(`http://localhost:3000/api/v1/products/listProducts/all/1/filters?brand[]=${nombre}`)).data;

    // const filteredData = DATA.filter(item => item.brand === nombre);
    console.log("lo que consigue",filteredData );
    if(filteredData.length > 0){
      return dispatch({
        type: FILTER,
        payload: filteredData
      });
    } else {
      console.log("No se encontraron objetos con ese nombre de marca.");
    }
    }
  };

  export const getZapatilla = () => {
    return async function (dispatch) {
      const productData = await (await axios("http://localhost:3000/api/v1/products/listProducts")).data

      // const productData = DATA;
      console.log("estoy en action producto",productData.products);
      return dispatch({
        type: "GET_ZAPATILLAS",
        payload: productData
      })
    }
  }




  export const getProductByName = (name) => {
    console.log('estoy en el action search',name)
    return async(dispatch) => {
        dispatch ({ type: LOADING });
        try {
            //  const { data } = await axios(${URL_SEARCHBAR}?name=${name});
            // DATA.filter(item => item.name === name);
            
            const {data} =await axios(`http://localhost:3000/api/v1/products/search?name=${name}`);
           
            console.log("elvalor de data en action", data)
            dispatch({ type: GET_PRODUCT_BY_NAME,
                       payload: data })
        } catch (error) {
            console.log('No se encontraron resultados');
            dispatch({ type: GET_PRODUCT_BY_NAME, payload: [] })
        }
    }
};














export const addItem = (product) => {
    return {
        type : ADDITEM,
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : DELITEM,
        payload : product
    }
}


