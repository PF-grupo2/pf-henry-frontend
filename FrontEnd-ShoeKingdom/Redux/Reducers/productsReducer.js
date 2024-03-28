import { Form } from "react-router-dom";
import {GET_ZAPATILLAS} from "../../Redux/Actions/products";

const initialState = {
    allZapatilla:[],
    zapatilla:[],
    selectedProduct: {},
    itsComments:[],
    filter: false,
  };

  function rootReducer(state =initialState, action){ 
    console.log("ejecuta la funcion")
    switch(action.type){
        case GET_ZAPATILLAS:
            console.log("reducer entro", action.payload)
            return{

                // AQUI COLOCARIA LO QUE VOY A ENVIAR QUE SE MUESTRE EN PANTALLA 
                ...state,
                allZapatilla: action.payload,
                filter:false
                
            };
        default: return state;

    }

}; 
export default rootReducer; 









// export default(state= initialState, action) =>{
//     const newState = {...state};
//     switch(action.type){
//         case GET_ZAPATILLAS:

//         case SET_LIST:
//             newState.list= action.products;
//         case SELECT_PRODUCT:
//             newState.selectedProduct = action.selectedProduct;
//         case ADD_IMAGE:
//                 newState.selectedProduct.images = newState.selectedProduct.images
//                 ? [...newState.selectedProduct.images, action.image]
//                 : []
                
//         case DELETE_IMAGE:
//                 newState.selectedProduct.images = newState.selectedProduct.images.filter(i => i.id != action.id)
             
//         case SET_COMMENTS:
//                   newState.itsComments = action.itsComments;
              
//         case ADD_COMMENT:
//                 newState.itsComments = [action.comment, ... newState.itsComments]
                
//          case DELETE_COMMENT:
//                 newState.itsComments = newState.itsComments.filter(c => c.id != action.id)
       
//        default:
//         return state;
              
//     }
//     return newState;
// };
