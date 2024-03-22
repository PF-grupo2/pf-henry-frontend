import { ADDITEM, 
    DELITEM } from "../Actions/action-types";

const initialState = {
    items: []
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


        default: 
        return {...state}
    }
}

export default reducer;