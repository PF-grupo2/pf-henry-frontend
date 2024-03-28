import axios from 'axios';
import { ADDITEM, 
    DELITEM,
    //GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    LOADING } from "./action-types";

const URL_SEARCHBAR = 'http://localhost:3001/api/v1/products/search';

export const addItem = (product) => {
    return {
        type : ADDITEM,
        payload : product
    }
};

export const delItem = (product) => {
    return {
        type : DELITEM,
        payload : product
    }
};

export const getProductByName = (name) => {
    console.log('estoy en el action',name)
    return async (dispatch) => {
        dispatch ({ type: LOADING });
        try {
            const { data } = await axios(`${URL_SEARCHBAR}?name=${name}`);
            dispatch({ type: GET_PRODUCT_BY_NAME, payload: data })
        } catch (error) {
            console.log('No se encontraron resultados');
            dispatch({ type: GET_PRODUCT_BY_NAME, payload: [] })
        }
    }
};