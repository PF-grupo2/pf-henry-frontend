import { Form } from "react-router-dom";
import {FILTER} from "../../Redux/Actions/categories";



const initialState ={
    allZapatilla:[],
    zapatilla:[],
    selectedCategory:{},
    filter: false,
}

function rootReducer(state =initialState, action){ 
    switch(action.type){
        case FILTER:
            console.log("reducer entro", action.payload)
            return{

                // AQUI COLOCARIA LO QUE VOY A ENVIAR QUE SE MUESTRE EN PANTALLA 
                ...state,
                zapatilla: action.payload,
                filter:true
                
            };
        default: return state;

    }

}; 
export default rootReducer; 