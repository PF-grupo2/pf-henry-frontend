const URL_SEARCHBAR = 'http://localhost:3001/api/v1/products/search';



import axios from "axios";
import DATA from '../../src/Data';
import React, { useState, useEffect } from 'react';

export const GET_ZAPATILLAS = "GET_ZAPATILLAS";
export const FILTER = "FILTER";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const LOADING = 'LOADING';
export const CLEAR_DETAIL= 'CLEAR_DETAIL';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_GENDER = 'GET_GENDER';
export const GET_FILTERS_ARRAY = "GET_FILTERS_ARRAY";
export const ADDITEM = 'ADDITEM';
export const DELITEM = 'DELITEM';
export const UPDATE_ITEM_QUANTITY='UPDATE_ITEM_QUANTITY';

export const updateItemQuantity = (itemId, newQuantity) => {
  return {
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
          itemId,
          newQuantity
      }
  };
};

export const getGender = (nombre) => {
 
  return async function(dispatch){
  
    const gender = await (await axios(`https://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?gender[]=${nombre}`)).data.products;
    // const filteredData = DATA.filter(item => item.brand === nombre);
    if(gender.length > 0){
      return dispatch({
        type: GET_GENDER,
        payload: gender
      });
    } else {
      console.log("No se encontraron objetos con ese nombre de marca.");
    }
    }
  };



export const getfilter = (nombre) => {
 
  return async function(dispatch){
  
    const filteredData = await (await axios(`https://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?brand[]=${nombre}`)).data.products;

    // const filteredData = DATA.filter(item => item.brand === nombre);
   
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

  export const getZapatilla = (filters, page=1) => {
    return async function (dispatch) {
      let productData = await (await axios(`https://pf-henry-backend.onrender.com/api/v1/products/listProducts/9/${page}/filters?`)).data
      if(filters) productData = await (await axios(`https://pf-henry-backend.onrender.com/api/v1/products/listProducts/9/${page}/filters?`+filters)).data

      // const productData = DATA;
      return dispatch({
        type: "GET_ZAPATILLAS",
        payload: productData
      })
    }
  }

  export const getFiltersArray = (filters=[])=>{
    return dispatch({
      type: "GET_FILTERS_ARRAY",
      payload: filters
    })
  }

  export function  getDetail (id) {
    return async function (dispatch) {
     try {
       const zapatillaDetail = await axios.get(`https://pf-henry-backend.onrender.com/api/v1/products/detail/${id}`);
    
       return dispatch({
         type: GET_DETAIL,
         payload: zapatillaDetail.data,
       });
     } catch (e) {
       console.log(e, "Error al traer el detalle");
     }
   };
 };

 export const clearDetail = () => {
    return {
      type: CLEAR_DETAIL,
    };
  };
 
  export const getProductByName = (name) => {

    return async(dispatch) => {
        dispatch ({ type: LOADING });
        try {
            //  const { data } = await axios(${URL_SEARCHBAR}?name=${name});
            // DATA.filter(item => item.name === name);
            
            // const {data} =await axios(`http://localhost:3000/api/v1/products/listProducts/all/1/filters?search=${name}`);

  
           
            // console.log("elvalor de data en action", name)
            dispatch({ type: GET_PRODUCT_BY_NAME,
                       payload:name})
        } catch (error) {
          
            dispatch({ type: GET_PRODUCT_BY_NAME, payload: [] })
        }
    }
};



export const addItem = (zapatillas) => {
  // console.log("entro en addItem", zapatillas)
    return {
      
      //const {data} =await axios(`http://localhost:3000/api/v1/products/listProducts/all/1/filters?search=${name}`);

        type : ADDITEM,
        payload : zapatillas
    }
};

export const delItem = (zapatillas) => {
    return {
        type : DELITEM,
        payload : zapatillas
    }
}