import { Form } from "react-router-dom";
import { GET_ZAPATILLAS, FILTER, GET_PRODUCT_BY_NAME, LOADING, GET_DETAIL, CLEAR_DETAIL, GET_GENDER, GET_FILTERS_ARRAY } from "../../Redux/Actions/actions";




const initialState = {
    allZapatilla: [],
    allZapatillaBackup: [],
    zapatilla: [],
    filter: false,
    loading: false,
    zapatillaDetail :{},
    filters : []
};

function rootReducer(state = initialState, action) {
    console.log("ejecuta la funcion")
   
    switch (action.type) {
        case GET_ZAPATILLAS:

            console.log("reducer entro", action.payload)
            const todosfiltros = action.payload.products
            if (todosfiltros.length === 0) {
            console.log("no consiguio")
            alert("no hay zapatillas con ese filtrado")
                return{
                    ...state,
                 allZapatilla: action.payload.products, //se elimina .products del payload 31/3 20h
                 filter: false,
               }
            }
              {

                return {
                    ...state,
                    allZapatilla: action.payload,
                    filter: false,
    
                };


            }
        
        

        case GET_FILTERS_ARRAY:
            console.log(payload);
            return{
                ...state,
                payload
            }

        case FILTER:
            console.log("reducer entro", action.payload)
            return {
                ...state,
                zapatilla: action.payload,
                filter: true

            };

            case GET_GENDER:
                console.log("reducer entro", action.payload)
                return {
    
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
