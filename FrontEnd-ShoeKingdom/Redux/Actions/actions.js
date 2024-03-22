import axios from 'axios';
import { ADDITEM, DELITEM } from "./action-types";

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