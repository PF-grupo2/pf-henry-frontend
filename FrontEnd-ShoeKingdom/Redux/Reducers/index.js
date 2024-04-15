import { Form } from "react-router-dom";
import {
  GET_ZAPATILLAS,
  FILTER,
  GET_PRODUCT_BY_NAME,
  LOADING,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_GENDER,
  GET_FILTERS_ARRAY,
  ADDITEM,
  DELITEM,
  UPDATE_ITEM_QUANTITY,
  LOGIN_SUCCESS,
  SET_TOKEN
} from "../../Redux/Actions/actions";
import { utilsStorage } from "../../src/Componentes/utils";

const initialState = {
  allZapatillas: [],
  allZapatillaBackup: [],
  zapatilla: [],
  filter: false,
  loading: false,
  zapatillaDetail: {},
  filters: [],
  items: [],
  addItem: [],
  user: null,
  token: ''
};

function rootReducer(state = initialState, action) {
  // console.log("ejecuta la funcion reducer")

  switch (action.type) {
    case GET_ZAPATILLAS:
      console.log("reducer entro", action.payload);
      const todosfiltros = action.payload.products;
      if (todosfiltros.length === 0) {
        alert("no hay zapatillas con ese filtrado");
        return {
          ...state,
          allZapatillas: action.payload, //se elimina .products del payload 31/3 20h
          filter: false,
        };
      } else {
        console.log("en el else de reducer", action.payload);
        return {
          ...state,
          allZapatillas: action.payload,
          filter: false,
        };
      }

     case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };


      case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    
    
       case GET_FILTERS_ARRAY:
      // console.log(payload);
      return {
        ...state,
        payload: action.payload,
      };


    case FILTER:
      // console.log("reducer entro", action.payload)
      return {
        ...state,
        zapatilla: action.payload,
        filter: true,
      };

    case GET_GENDER:
      // console.log("reducer entro", action.payload)
      return {
        ...state,
        zapatilla: action.payload,
        filter: true,
      };
    case GET_PRODUCT_BY_NAME:
      // console.log("estoy en reducer", action.payload)
      return {
        ...state,
        loading: false,
        zapatilla: action.payload,
        filter: true,
      };
    case GET_DETAIL:
      return {
        ...state,
        zapatillaDetail: action.payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        zapatillaDetail: {},
      };

    case ADDITEM:
      return {
        // addItem: action.payload
        addItem: [...state.addItem, action.payload],
      };

    case DELITEM:
      return {
        ...state,
        addItem: state.addItem.filter((item) => item.id !== action.payload.id),
      };

    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        addItem: state.addItem.map((item) => {
          if (item.id === action.payload.itemId) {
            //Si el id del ítem coincide con el id del ítem que se está actualizando,
            //se actualiza la cantidad y se devuelve el ítem actualizado
            return {
              ...item,
              quantity: action.payload.newQuantity, //Actualiza la cantidad con el nuevo valor
            };
          } else {
            //Si el id del ítem no coincide, se devuelve el ítem sin cambios
            return item;
          }
        }),
      };

    default:
      return state;
  }
}
export default rootReducer;
