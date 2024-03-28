import { ADDITEM, 
    DELITEM,
    //GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    LOADING } from "../Actions/action-types";

const initialState = {
    //products: [],
    items: [],
    loading: false
}

const reducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case ADDITEM: 
            return {
            items: payload
        }


        case DELITEM:
            return state = state.filter((x) => {
                return x.id !== payload.id
            })

        case GET_PRODUCT_BY_NAME:
            console.log("estoy en reducer",action.payload)
            return {
                ...state,
                loading: false,
                items: action.payload
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        default: 
        return {...state}
    }
}

export default reducer;