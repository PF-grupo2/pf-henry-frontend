import { Form } from "react-router-dom";
import { GET_ZAPATILLAS, FILTER, GET_PRODUCT_BY_NAME, LOADING, GET_DETAIL, CLEAR_DETAIL } from "../../Redux/Actions/actions";



const initialState = {
    allZapatilla: [],
    zapatilla: [],
    filter: false,
    loading: false,
    zapatillaDetail :{}

};

function rootReducer(state = initialState, action) {
    console.log("ejecuta la funcion")
    switch (action.type) {
        case GET_ZAPATILLAS:

            console.log("reducer entro", action.payload.products)
            return {

                // AQUI COLOCARIA LO QUE VOY A ENVIAR QUE SE MUESTRE EN PANTALLA 
                ...state,
                allZapatilla: action.payload.products,
                filter: false

            };

        case FILTER:
            console.log("reducer entro", action.payload)
            return {

                // AQUI COLOCARIA LO QUE VOY A ENVIAR QUE SE MUESTRE EN PANTALLA 
                ...state,
                zapatilla: action.payload,
                filter: true

            };
        case GET_PRODUCT_BY_NAME:
            console.log("estoy en reducer", action.payload)
            return {
                ...state,
                loading: false,
                zapatilla: action.payload,
                filter: true
            }
        case GET_DETAIL:
            
            return {
             ...state,
            zapatillaDetail: action.payload 
            };


        case CLEAR_DETAIL:
            return {
            ...state,
            zapatillaDetail: {},
      };    
    


        default: return state;

    }

};
export default rootReducer; 
