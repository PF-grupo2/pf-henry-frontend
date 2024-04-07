import { ADDITEM, 
    DELITEM, UPDATE_ITEM_QUANTITY} from "../Actions/action-types";

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

            case UPDATE_ITEM_QUANTITY :
                return state.map(item =>
                    item.id === action.payload.itemId ? { ...item, quantity: action.payload.newQuantity } : item
                );
        default: 
        return {...state}
    }
}

export default reducer;